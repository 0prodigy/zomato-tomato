import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Card, CardMedia, Grid } from "@material-ui/core";

function CollectionCards(props) {
  const match = useRouteMatch();
  const { data } = props;
  return (
    <Grid item>
      <Link
        to={{
          pathname: `/${
            match.params.city
          }/restaurants/${data.name.toLowerCase().split(" ").join("")}`,
          state: { res_id: data.id },
        }}
        style={{ textDecoration: "none" }}
      >
        <Card
          style={{
            height: "fit-content",
            width: "265px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          elevation={0}
        >
          <CardMedia
            component="img"
            src={data.thumb}
            style={{ height: "190px", width: "264px" }}
            alt="restaurant thumbnail"
          />
          <div
            style={{
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              margin: "0.5rem 0px 1rem",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                display: "block",
                whiteSpace: "nowrap",
              }}
            >
              {data.name}
            </div>
            <div
              style={{
                fontWeight: "300",
                fontSize: "15px",
                display: "inline-block",
                overflow: "hidden",
                maxWidth: "100%",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {data.location.locality_verbose}
            </div>
            <div
              style={{
                fontWeight: "300",
                fontSize: "15px",
                display: "inline-block",
                maxWidth: "100%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {data.cuisines}
            </div>
          </div>
        </Card>
      </Link>
    </Grid>
  );
}

export default CollectionCards;
