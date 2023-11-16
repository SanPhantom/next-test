'use server';

import { revalidateTag } from 'next/cache'

export default async function action() {
  console.log("start action")
  revalidateTag('getPosts')
}