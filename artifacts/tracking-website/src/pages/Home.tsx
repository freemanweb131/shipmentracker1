import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import TrackingForm from "@/components/TrackingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tracking" }]} />
        <TrackingForm />
      </main>
      <Footer />
    </div>
  );
}
