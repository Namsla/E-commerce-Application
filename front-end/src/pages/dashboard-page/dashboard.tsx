import Footer1 from "../../components/Nams-Layout/footer";
import Header1 from "../../components/Nams-Layout/header";
import { DashbaordEmpty } from "./dashboard-empty";

export const DashbaordPage = () => {
  return (
    <>
      <Header1 />
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
            My Dashboard
            <DashbaordEmpty />
          </p>
        </section>
      </main>
      <Footer1 />
    </>
  );
};
