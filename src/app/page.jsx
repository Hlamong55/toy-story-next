import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <div className="space-y-20 md:w-11/12 mx-auto">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Products></Products>
      </section>
    </div>
  );
}
