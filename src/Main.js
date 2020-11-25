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


import * as Elementary from '@excellens/elementary'
import MarkdownIt from 'markdown-it'
import MarkdownItSub from 'markdown-it-sub'
import MarkdownItSup from 'markdown-it-sup'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItDeflist from 'markdown-it-deflist'
import MarkdownItAbbr from 'markdown-it-abbr'
import MarkdownItEmoji from 'markdown-it-emoji'
import MarkdownItContainer from 'markdown-it-container'
import MarkdownItIns from 'markdown-it-ins'
import MarkdownItMark from 'markdown-it-mark'

export function Instance() {
    const self = (function () {
        const instance = MarkdownIt();
        instance.use(MarkdownItSub);
        instance.use(MarkdownItSup);
        instance.use(MarkdownItFootnote);
        instance.use(MarkdownItDeflist);
        instance.use(MarkdownItAbbr);
        instance.use(MarkdownItEmoji);
        instance.use(MarkdownItContainer);
        instance.use(MarkdownItIns);
        instance.use(MarkdownItMark);
        return instance;
    }());

    return Elementary.Base.Merge(this, self);
}

import {version} from '../package.json'

export const metadata = {
    version: version,
};
