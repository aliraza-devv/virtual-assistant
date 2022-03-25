import React from "react";
import { Typography, Grid, Grow, Card } from "@material-ui/core";

import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./styles.js";

const infoCards = [
  { 
    color: "#D0748C",
    title: "You can ask for latest,Categories,Terms and Sources News",
    text: "Give me the (latest,Categories,Terms or Sources) news" },
  {
    color: "#D0748C",
    title: "You can ask about weather",
    text: "What,s the waether today in Lahore",
  },
  {
    color: "#4E57B7",
    title: "You can ask about Bitcoin details",
    text: "What's bitcoin price today.",
  },
  {
    color: "#4E57B7",
    title: "You can use it as a calculator",
    text: "Add 2 plus 3",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >      
                <Typography className={classes.fontSt} variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography className={classes.fontSt} variant="h6" component="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography className={classes.fontSt} variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
