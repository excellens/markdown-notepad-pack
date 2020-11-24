/*
 * MIT License
 * Copyright (c) 2020 Excellens
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {terser} from 'rollup-plugin-terser'

import json from '@rollup/plugin-json'

import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';

import * as pkg from './package.json'

const globals = {
    '@excellens/elementary': 'Elementary',
    'markdown-it': 'markdownit',
    'markdown-it-sub': 'markdownitSub',
    'markdown-it-sup': 'markdownitSup',
    'markdown-it-footnote': 'markdownitFootnote',
    'markdown-it-deflist': 'markdownitDeflist',
    'markdown-it-abbr': 'markdownitAbbr',
    'markdown-it-emoji': 'markdownitEmoji',
    'markdown-it-container': 'markdownitContainer',
    'markdown-it-ins': 'markdownitIns',
    'markdown-it-mark': 'markdownitMark',
};

export default {
    external: [
        '@excellens/elementary',
    ],
    input: 'src/Main.js',
    plugins: [
        json(),
        {
            banner() {
                return `/*! ${pkg.name} ${pkg.version} ${pkg.homepage} @license ${pkg.license} */`;
            },
        },
        nodeResolve({
            preferBuiltins: true,
            browser: true,
        }),
        commonjs(),
        nodePolyfills(),
    ],
    output: [
        {
            format: 'iife',
            file: 'dist/markdown-notepad-pack.js',
            name: 'MarkdownNotepadPack',
            plugins: [
                terser({
                    mangle: false,
                    compress: false,
                    format: {
                        comments: /^(?:(?!Copyright).)*$/is,
                        beautify: true,
                        ascii_only: true,
                        indent_level: 2,
                    },
                }),
            ],
            sourcemap: true,
            globals,
        },
        {
            format: 'iife',
            file: 'dist/markdown-notepad-pack.min.js',
            name: 'MarkdownNotepadPack',
            plugins: [
                terser({
                    format: {
                        ascii_only: true,
                    },
                }),
            ],
            sourcemap: true,
            globals,
        },
    ],
}
