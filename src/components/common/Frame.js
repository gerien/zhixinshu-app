import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import { StickyFooter } from './StickyFooter';

const sections = [
  { title: '首页', url: '/#/home' },
  { title: '讲师阵容', url: '/#/team' },
  { title: '课程安排', url: '/#/lesson' },
  { title: '学员服务', url: '/#/service' },
];

const theme = createTheme();

export function Frame({children}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="知新塾" sections={sections} />
        <main>
          {children}
        </main>
      </Container>
      <StickyFooter/>
    </ThemeProvider>
  );
}
