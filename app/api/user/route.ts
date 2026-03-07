import DBConnect from "@/data/mongodb";
import User from "@/data/models/User";

export async function GET() {
  await DBConnect();
  const user = await User.find({});
  return new Response(JSON.stringify(user), { status: 200 });
}

export async function POST(req: any) {
  await DBConnect();
  const body = await req.json();
  const user = await User.create(body);
  return new Response(JSON.stringify(user), { status: 201 });
}