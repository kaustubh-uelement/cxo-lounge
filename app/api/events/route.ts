import { NextResponse } from "next/server";
import { events, sortEvents } from "@/data/events";

// Public JSON feed of events, e.g. for partner sites, newsletters or a mobile app.
// Optional filters: ?type=league&city=Mumbai&status=registration-open
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const city = searchParams.get("city");
  const status = searchParams.get("status");
  const list = sortEvents(events).filter(
    (e) => (!type || e.type === type) && (!city || e.city.toLowerCase() === city.toLowerCase()) && (!status || e.status === status),
  );
  return NextResponse.json({ count: list.length, events: list });
}
