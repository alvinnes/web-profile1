import CardSwap, { Card } from "@/components/react-bits/CardSwap";

const CardImgHome = () => {
  return (
    <div className="absolute sm:-right-25 xs:bottom-120 xs:right-40 sm:-bottom-43 h-100">
      <CardSwap
        cardDistance={40}
        verticalDistance={100}
        delay={5000}
        skewAmount={0}
        pauseOnHover={false}
        width={600}
      >
        <Card>
          <h3 className="border-solid border-b-1 py-3 px-6 font-semibold text-xl border-slate-200">
            Card 1
          </h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
    </div>
  );
};

export default CardImgHome;
