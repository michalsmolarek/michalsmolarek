import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Page } from 'gatsby-theme-portfolio-minimal/src/components/Page';
import { Seo } from 'gatsby-theme-portfolio-minimal/src/components/Seo';
import { AuthorSnippet } from 'gatsby-theme-portfolio-minimal/src/components/AuthorSnippet';
import { ArticleTemplateData } from 'gatsby-theme-portfolio-minimal/src/templates/Article/data';
import * as classes from './style.module.css';

interface ArticleTemplateProps {
    pageContext: {
        article: ArticleTemplateData;
        listingPagePath: string;
    };
}

export default function ArticleTemplate(props: ArticleTemplateProps): React.ReactElement {
    const article = props.pageContext.article;
    return (
        <>
            <Seo title={article.title} description={article.description || undefined} useTitleTemplate={true} />
            <Page>
                <article className={classes.Article}>
                    <div className={classes.Breadcrumb}>
                        <Link to={props.pageContext.listingPagePath} title="Wróć do listy artykułów">
                            <span className={classes.BackArrow}>&#10094;</span>
                            Wszystkie artykuły
                        </Link>
                    </div>
                    <section className={classes.Header}>
                        <span className={classes.Category}>{article.categories.join(' / ')}</span>
                        <h1>{article.title}</h1>
                        <div className={classes.Details}>
                            {/* {article.date} */}
                            {/* <span className={classes.ReadingTime}>{article.readingTime.text}</span> */}
                        </div>
                    </section>
                    {article.banner && article.banner.src && (
                        <section className={classes.Banner}>
                            <GatsbyImage
                                image={article.banner.src.childImageSharp.gatsbyImageData}
                                alt={article.banner.alt || `Obrazek dla ${article.title}`}
                                imgClassName={classes.BannerImage}
                            />
                            {article.banner.caption && (
                                <span
                                    className={classes.BannerCaption}
                                    dangerouslySetInnerHTML={{ __html: article.banner.caption }}
                                />
                            )}
                        </section>
                    )}
                    <section className={classes.Body}>
                        <div className={classes.Content} dangerouslySetInnerHTML={{ __html: article.body }} />
                        {article.keywords &&
                            article.keywords.map((keyword, key) => {
                                return (
                                    <span key={key} className={classes.Keyword}>
                                        {keyword}
                                    </span>
                                );
                            })}
                    </section>
                    <section className={classes.Footer}>
                        <AuthorSnippet />
                    </section>
                </article>
            </Page>
        </>
    );
}
