import { SingleProdPage } from "./SingleProdCard";
import { useSelector } from "react-redux";
import { Grid } from "@chakra-ui/react";

export const Products = ({ prod }) => {
  const { isLoading } = useSelector((store) => store.AppReducer);

  return (
    <>
      {!isLoading && (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
        >
          {prod.map((el) => {
            // return <SingleProdCard key={el.id} {...el} />;
            return <SingleProdPage key={el.id} {...el} />;
          })}
        </Grid>
      )}
    </>
  );
};