/*
 * @Description: 全局style
 * @Date: 2019-10-08 18:38:13
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 16:21:55
 */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font: inherit;
		vertical-align: baseline;
		box-sizing: border-box;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	input,textarea{
		box-sizing:border-box;
	}
	html {
		font-size: -webkit-calc(13.33333333vw);
		font-size: calc(13.33333333vw);
	}
	@media screen and (max-width: 320px) {
		html {
			font-size: 42.667px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 321px) and (max-width: 360px) {
		html {
			font-size: 48px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 361px) and (max-width: 375px) {
		html {
			font-size: 50px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 376px) and (max-width: 393px) {
		html {
			font-size: 52.4px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 394px) and (max-width: 412px) {
		html {
			font-size: 54.93px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 413px) and (max-width: 414px) {
		html {
			font-size: 55.2px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 415px) and (max-width: 480px) {
		html {
			font-size: 64px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 481px) and (max-width: 540px) {
		html {
			font-size: 72px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 541px) and (max-width: 640px) {
		html {
			font-size: 85.33px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 641px) and (max-width: 720px) {
		html {
			font-size: 96px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 721px) and (max-width: 768px) {
		html {
			font-size: 102.4px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	@media screen and (min-width: 769px) {
		html {
			font-size: 102.4px;
			font-size: -webkit-calc(13.33333333vw);
			font-size: calc(13.33333333vw);
		}
	}
	body {
		font-family: "PingFangSC-Regular", "Microsoft YaHei", Helvetica;
		color: #333333;
		background: #f5f7f9;
		font-size: .28rem;
		height: 100%;
	}
	html{
		color: #333333;
		height: 100%;
	}
	.none,
	.hidden {
		display: none !important;
	}
	@media screen and (min-width: 769px) {
		html {
			font-size: 102.4px;
		}
		html .wap-wrap {
			width: 768px;
			margin: 0 auto;
		}
	}
`;

