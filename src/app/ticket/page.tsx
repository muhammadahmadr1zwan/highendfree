import { Suspense } from "react";
import TicketForm from "./ticket-form";

export default function TicketPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background text-center pt-32">Loading…</div>}>
      <TicketForm />
    </Suspense>
  );
} 