import OemProfileContent from "@/components/oems/OemProfileContent";

export default function OemProfilePage({ params }: { params: { id: string } }) {
  return <OemProfileContent id={params.id} />;
}