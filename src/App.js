import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers'
import { Typography } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import './images/background.png';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js'

const alanKey = 'ba40bb09235d39c7cfccfed27f62eb152e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
    const [activeArticle, setActiveArticle] = useState(0);
    const [newsArticles, setNewsArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                  setNewsArticles(articles);
                  setActiveArticle(-1);
                } else if (command === 'instructions') {
                  setIsOpen(true);
                } else if (command === 'highlight') {
                  setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                  const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                  const article = articles[parsedNumber - 1];
        
                  if (parsedNumber > articles.length) {
                    alanBtn().playText('Please try that again...');
                  } else if (article) {
                    window.open(article.url, '_blank');
                    alanBtn().playText('Opening');
                  } else {
                    alanBtn().playText('Please try that again...');
                  }
                }
              },
            });
          }, []);

    return (
      <div className={classes.backimg}>
      <div className={classes.logoContainer}>
      <img src='./images/logo.png' />
      <h1 className={classes.heading}>Hi, I am your virtual news reader assistant, <br /> How can i help you? </h1>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number (*number*)</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        {/* <img src="./background.png" className={classes.alanLogo} alt="logo" /> */}
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
              &copy; Copyrights 2022 reserved by - Ali Raza 
          </Typography>
        </div>
      ) : null}
    </div>
    );
};

export default App;