import { List, ListItem, ListItemText, Typography, Divider, ListItemButton } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import useSWR from 'swr';
import baseUrl from '../baseUrl';

const fetcher = async () => {
  const res = await fetch(`${baseUrl}/news`);
  const data = await res.json();
  return data;
}

const News: NextPage = ()=> {
  const { data: news, error } = useSWR("news", fetcher);

  if (!news && !error) {
    return <div>Fetching new news...</div>;
  }

  if (!news) {
    return <div>No news found</div>;
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {news.map((news: any) => (
        <Fragment key={news.id}>
          <ListItem alignItems="flex-start">
            <Link href={`/ssg/${news.id}`} passHref>
              <ListItemButton LinkComponent="a">
                <ListItemText
                  primary={`Article: ${news.article}`}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {news.category} {` `}
                      </Typography>
                      {news.description}
                    </>
                  }
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
}

export default News;
