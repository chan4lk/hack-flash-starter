import { VehicleRepository } from "@/domain/VehicleRepository";

export async function DELETE(request: Request) {

    const vehicleRepo = new VehicleRepository();
    await vehicleRepo.delete()
    
  return new Response(JSON.stringify(
    "Success"
  ), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
