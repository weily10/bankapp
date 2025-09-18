"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export async function signIn({ email, password }: signInProps) {
  try {
    const { account } = await createAdminClient();

    const res = account.createEmailPasswordSession({ email, password });
    return parseStringify(res);
  } catch (error) {
    console.log(error);
  }
}

export async function signUp({ password, ...userData }: SignUpParams) {
  const { email, firstName, lastName } = userData;
  let newUserAccount;
  try {
    const { account } = await createAdminClient();

    newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession({
      email,
      password,
    });

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.log(error);
  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}
