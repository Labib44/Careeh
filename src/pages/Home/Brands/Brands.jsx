import ajkerdeal from "../../../assets/brands/ajkerdeal-color.png";
import bata from "../../../assets/brands/bata-color.png";
import loto from "../../../assets/brands/lotto-color.png";
import othoba from "../../../assets/brands/othoba-color.png";
import rangs from "../../../assets/brands/rangs-group-color.png";
import daraz from "../../../assets/brands/daraz-color.png";

const Brands = () => {
  const topEnterprices = [
    { brandImg: bata },
    { brandImg: rangs },
    { brandImg: loto },
  ];
  const topSmes = [
    { brandImg: daraz },
    { brandImg: ajkerdeal },
    { brandImg: othoba },
  ];
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 sm:gap-12 gap-5 md:justify-items-center items-center ">
      <div>
        <h2 className="hidden sm:block text-center">TOP ENTERPRISES</h2>
        <div className="grid sm:grid-cols-3 grid-cols-4 sm:justify-items-center items-center">
          <h2 className="sm:hidden block">TOP ENTERPRISES</h2>
          {topEnterprices.map((brand) => (
            <img
              className="h-12 filter grayscale hover:filter-none transition-all hover:scale-110 cursor-pointer"
              key={brand.brandImg}
              src={brand.brandImg}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="hidden sm:block text-center">TOP SMES</h2>
        <div className="grid sm:grid-cols-3 grid-cols-4 sm:justify-items-center items-center">
          <h2 className="sm:hidden block">TOP SMES</h2>
          {topSmes.map((brand) => (
            <img
              className={`h-12 filter grayscale hover:filter-none transition-all hover:scale-110 cursor-pointer ${
                brand.brandImg === daraz || brand.brandImg === othoba
                  ? "sm:h-[20px]  h-[30px]"
                  : undefined
              }`}
              key={brand.brandImg}
              src={brand.brandImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
