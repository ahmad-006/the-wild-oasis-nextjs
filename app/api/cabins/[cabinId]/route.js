import { getCabin } from "@/app/_lib/data-service";

export async function GET(request,{params}) {
    const { cabinId } = await params;
    const cabin = await getCabin(cabinId);
    return Response.json(cabin)

}