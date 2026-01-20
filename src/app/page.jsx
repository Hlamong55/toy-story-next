import Banner from "@/components/home/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-3 md:w-11/12 mx-auto">
      <section>
        <Banner></Banner>
      </section>
    </div>
  );
}
