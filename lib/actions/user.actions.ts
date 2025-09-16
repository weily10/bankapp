"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export async function signIn({ password, ...userData }: SignUpParams) {
  try {
  } catch (error) {
    console.log(error);
  }
}

export async function signUp({ password, ...userData }: SignUpParams) {
  const { email, firstName, lastName } = userData;
  let newUserAccount;
  try {
    const { account, database } = await createAdminClient();

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
