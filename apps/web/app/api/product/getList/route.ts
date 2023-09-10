import { NextResponse } from "next/server";
import { products } from '..';

export async function GET() {
  return NextResponse.json(products);
}
