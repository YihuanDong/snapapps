/*

	lang-ja_HIRA.js

	Japanese Hiragana translation for SNAP!

	written by Jens Mönig

	Copyright (C) 2012 by Jens Mönig

	This file is part of Snap!.

	Snap! is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation, either version 3 of
	the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.ja_HIRA = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    Ä, ä   \u00c4, \u00e4
    Ö, ö   \u00d6, \u00f6
    Ü, ü   \u00dc, \u00fc
    ß      \u00df
*/

    // translations meta information
    'language_name':
        '�?ほん�?', // the name as it should appear in the language menu
    'language_translator':
        'Kazuhiro Abe', // your name for the Translators tab
    'translator_e-mail':
        'abee@squeakland.jp', // optional
    'last_changed':
        '2013-04-02', // this, too, will appear in the Translators tab

    // GUI
    // control bar:
    'untitled':
        'めいしょうみせってい',
    'development mode':
        'かい�?つしゃモード',

    // categories:
    'Motion':
        'うご�?',
    'Looks':
        'みた�?',
    'Sound':
        'おと',
    'Pen':
        'ペン',
    'Control':
        'せいぎょ',
    'Sensing':
        'しらべる',
    'Operators':
        'えんざん',
    'Variables':
        'へんすう',
    'Lists':
        '�?スト',
    'Other':
        'その�?',

    // editor:
    'draggable':
        'ドラッグかの�?',

    // tabs:
    'Scripts':
        'スク�?プト',
    'Costumes':
        'コスチューム',
    'Sounds':
        'おと',

    // names:
    'Sprite':
        'スプライ�?',
    'Stage':
        'ステージ',

    // rotation styles:
    'don\'t rotate':
        'かいてんしな�?',
    'can rotate':
        'かいてんする',
    'only face left/right':
        'さゆうに�?んてんするだ�?',

    // new sprite button:
    'add a new sprite':
        'あたらしいスプライトをついかする',

    // tab help
    'costumes tab help':
        'ほかのWebページやコンピューターじょう�?がぞうを\n'
            + 'ここ�?ドロップしてよみこみます',
    'import a sound from your computer\nby dragging it into here':
        'コンピューターじょう�?サウンドを\nここ�?ドラッグしてよみこみます',

    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // motion:
    'Stage selected:\nno motion primitives':
        'せんたくされたステー�?:\nうごきのプリミティブがありません',

    'move %n steps':
        '%n ほうごか�?',
    'turn %clockwise %n degrees':
        '%clockwise %n どまわす',
    'turn %counterclockwise %n degrees':
        '%counterclockwise %n どまわす',
    'point in direction %dir':
        '%dir どにむける',
    'point towards %dst':
        '%dst へむける',
    'go to x: %n y: %n':
        'xざひょう�? %n 、yざひょう�? %n �?する',
    'go to %dst':
        '%dst へい�?',
    'glide %n secs to x: %n y: %n':
        '%n びょうでxざひょう�? %n �?、yざひょう�? %n �?かえ�?',
    'change x by %n':
        'xざひょう�? %n ずつかえ�?',
    'set x to %n':
        'xざひょう�? %n �?する',
    'change y by %n':
        'yざひょう�? %n ずつかえ�?',
    'set y to %n':
        'ざひょう�? %n �?する',
    'if on edge, bounce':
        'もし�?しについたら、は�?かえ�?',
    'x position':
        'xざひょう',
    'y position':
        'yざひょう',
    'direction':
        'む�?',

    // looks:
    'switch to costume %cst':
        'コスチューム�? %cst �?する',
    'next costume':
        'つぎ�?コスチューム�?する',
    'costume #':
        'コスチューム�?ばんごう',
    'say %s for %n secs':
        '%s �? %n びょうい�?',
    'say %s':
        '%s とい�?',
    'think %s for %n secs':
        '%s �? %n びょうかんがえる',
    'think %s':
        '%s とかんがえる',
    'Hello!':
        'こん�?ちは!',
    'Hmm...':
        'うー�?...',
    'change %eff effect by %n':
        '%eff �?こうかを %n ずつかえ�?',
    'set %eff effect to %n':
        '%eff �?こうかを %n �?する',
    'clear graphic effects':
        'がぞうこうかをなくす',
    'change size by %n':
        'おおきさ�? %n ずつかえ�?',
    'set size to %n %':
        'おおきさ�? %n �?する',
    'size':
        'おおきさ',
    'show':
        'ひょうじする',
    'hide':
        'かく�?',
    'go to front':
        'まえ�?だす',
    'go back %n layers':
        '%n そうさげ�?',

    'development mode \ndebugging primitives:':
        'かい�?つしゃモード\nデバッグようプリミティブ:',
    'console log %mult%s':
        'コンソー�?�?�? %mult%s',
    'alert %mult%s':
        'けいこく: %mult%s',

    // sound:
    'play sound %snd':
        '%snd �?おとをならす',
    'play sound %snd until done':
        'おわるま�? %snd �?おとをならす',
    'stop all sounds':
        'すべてのおとをとめる',
    'rest for %n beats':
        '%n �?くやすむ',
    'play note %n for %n beats':
        '%n �?おんぷを %n �?くならす',
    'change tempo by %n':
        'テンポを %n ずつかえ�?',
    'set tempo to %n bpm':
        'テンポを %n BPM�?する',
    'tempo':
        'テン�?',

    // pen:
    'clear':
        'けす',
    'pen down':
        'ペンをおろす',
    'pen up':
        'ペンをあげる',
    'set pen color to %clr':
        'ペン�?いろ�? %clr �?する',
    'change pen color by %n':
        'ペン�?いろ�? %n ずつかえ�?',
    'set pen color to %n':
        'ペン�?いろ�? %n �?する',
    'change pen shade by %n':
        'ペン�?こさ�? %n ずつかえ�?',
    'set pen shade to %n':
        'ペン�?こさ�? %n �?する',
    'change pen size by %n':
        'ペン�?ふとさを %n ずつかえ�?',
    'set pen size to %n':
        'ペン�?ふとさを %n �?する',
    'stamp':
        'スタンプ',

    // control:
    'when %greenflag clicked':
        '%greenflag がおされたと�?',
    'when %keyHat key pressed':
        '%keyHat がおされたと�?',
    'when I am clicked':
        'じぶんが�?�?ックされたと�?',
    'when I receive %msgHat':
        '%msgHat をうけとったとき',
    'broadcast %msg':
        '%msg をおくる',
    'broadcast %msg and wait':
        '%msg をおくってま�?',
    'Message name':
        'メッセージめ�?',
    'wait %n secs':
        '%n びょうま�?',
    'wait until %b':
        '%b までまつ',
    'forever %c':
        'ずっ�? %c',
    'repeat %n %c':
        '%n かいくりかえ�? %c',
    'repeat until %b %c':
        '%b までくりかえ�? %c',
    'if %b %c':
        'もし %b �?�? %c',
    'if %b %c else %c':
        'もし %b �?�? %c でなけれ�? %c',
    'report %s':
        '%s をかえす',
    'stop block':
        'ブロックをとめる',
    'stop script':
        'スク�?プトをとめる',
    'stop all %stop':
        'すべてをとめ�? %stop',
    'run %cmdRing %inputs':
        '%cmdRing �? %inputs でじっこうす�?',
    'launch %cmdRing %inputs':
        '%cmdRing �? %inputs できどうする',
    'call %repRing %inputs':
        '%repRing �? %inputs でよ�?',
    'run %cmdRing w/continuation':
        'けいぞくつき�? %cmdRing をじっこうす�?',
    'call %cmdRing w/continuation':
        'けいぞくつき�? %cmdRing をよ�?',
    'warp %c':
        '�?ープする %c',
    'when I start as a clone':
        '�?�?ーンされたと�?',
    'create a clone of %cln':
        '%cln �?�?�?ーンをつくる',
    'myself':
        'じぶんじしん',
    'delete this clone':
        'この�?�?ーンをさくじょす�?',

    // sensing:
    'touching %col ?':
        '%col �?ふれ�?',
    'touching %clr ?':
        '%clr いろ�?ふれ�?',
    'color %clr is touching %clr ?':
        '%clr いろ�? %clr いろ�?ふれ�?',
    'ask %s and wait':
        '%s ときいてまつ',
    'what\'s your name?':
        'あなたの�?まえ�?�?んですか?',
    'answer':
        'こた�?',
    'mouse x':
        'マウスのxざひょう',
    'mouse y':
        'マウスのyざひょう',
    'mouse down?':
        'マウスがおされた',
    'key %key pressed?':
        '%key がおされ�?',
    'distance to %dst':
        '%dst まで�?きょ�?',
    'reset timer':
        'タイマーをリセッ�?',
    'timer':
        'タイマー',
    'http:// %s':
        'http:// %s',
    'turbo mode?':
        'ターボモード?',
    'set turbo mode to %b':
        'ターボー�?ード�? %b �?する',

    'filtered for %clr':
        '%clr いろをちゅうしゅ�?',
    'stack size':
        'スタック�?おおきさ',
    'frames':
        'フレーム',

    // operators:
    '%n mod %n':
        '%n �? %n でわったあま�?',
    'round %n':
        '%n をまるめ�?',
    '%fun of %n':
        '%fun %n',
    'pick random %n to %n':
        '%n から %n まで�?らんすう',
    '%b and %b':
        '%b かつ %b',
    '%b or %b':
        '%b また�? %b',
    'not %b':
        '%b では�?�?',
    'true':
        '�?�?',
    'false':
        'いい�?',
    'join %words':
        '%words をつ�?�?',
    'hello':
        'ハロ�?',
    'world':
        '�?ール�?',
    'letter %idx of %s':
        '%idx もじめのもじ %s',
    'length of %s':
        '%s �?�?がさ',
    'unicode of %s':
        '%s のUnicode',
    'unicode %n as letter':
        'Unicode�? %n �?もじ',
    'is %s a %typ ?':
        '%s �? %typ がた',
    'is %s identical to %s ?':
        '%s �? %s とどうい�?',

    'type of %s':
        '%s �?かた',

    // variables:
    'Make a variable':
        'あたらしいへんすうをつく�?',
    'Variable name':
        'へんすうめい',
    'Delete a variable':
        'へんすうをさくじ�?',

    'set %var to %s':
        '%var �? %s �?する',
    'change %var by %n':
        '%var �? %n ずつかえ�?',
    'show variable %var':
        '%var ひょうじする',
    'hide variable %var':
        '%var をかくす',
    'script variables %scriptVars':
        'スク�?プトへんすう %scriptVars',

    // lists:
    'list %exp':
        '�?スト %exp',
    '%s in front of %l':
        '%s �? %l �?せんとう�?おく',
    'item %idx of %l':
        '%idx ばん�? %l',
    'all but first of %l':
        '%l �?せんとういが�?',
    'length of %l':
        '%l �?�?がさ',
    '%l contains %s':
        '%l �? %s がふくまれている�?',
    'thing':
        '�?�?�?',
    'add %s to %l':
        '%s �? %l �?ついかす�?',
    'delete %ida of %l':
        '%ida �? %l からさくじょする',
    'insert %s at %idx of %l':
        '%s �? %idx ばんめにそう�?ゅうする %l',
    'replace item %idx of %l with %s':
        '%idx ばん�? %l �? %s でおきかえる',

    // other
    'Make a block':
        'ブロックをつくる',

    // menus
    // snap menu
    'About...':
        'Snap!�?つい�?...',
    'Snap! website':
        'Snap!のWebサイ�?',
    'Download source':
        'ソースをダウン�?ード',
    'Switch back to user mode':
        'ユーザー�?ード�?きりかえ',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'こうどな�?ーフィッ�?コンテクストメニューをむこう�?して\nユーザーフレンド�?ーなメニューをひょうじす�?',
    'Switch to dev mode':
        'かい�?つしゃモード�?きりかえ�?',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'ユーザーフレンド�?ーで�?�?い\n�?ーフィッ�?コンテクストメニューと\nインスペ�?ターをゆうこうにする',

    // project menu
    'Project notes...':
        'プロジェ�?トのメモ...',
    'New':
        'しん�?',
    'Open...':
        'ひら�?...',
    'Save':
        'ほぞ�?',
    'Save As...':
        '�?まえをつけてほぞ�?...',
    'Import...':
        'よみこみ...',
    'file menu import hint':
        'チェックするとレポーターをドラッ�?&ドロップするとき\n'
		+ 'そら�?�?ポーター�?フォーカスします\n\n'
		+ 'いくつか�?ブラウザーで�?サポートされませ�?',
    'Export project as plain text...':
        'テキストファイルとしてプ�?ジェ�?トをかきだす...',
    'Export project...':
        'プロジェ�?トをかきだす...',
    'show project data as XML\nin a new browser window':
        'プロジェ�?トのデータをXMLとし�?\nブラウザ�?あたらしいウインドウ�?ひょうじする',
    'Export blocks...':
        'ブロックをかきだ�?...',
    'show global custom block definitions as XML\nin a new browser window':
        'グローバ�?�?スタムブ�?ック�?ていぎをXMLとし�?\nブラウザ�?あたらしいウインドウ�?ひょうじする',
    'Import tools':
        'ツー�?をよみこむ',
    'load the official library of\npowerful blocks':
        'きょうりょく�?ブロック�?こうしき\nライブラ�?をよみこむ',

    // cloud menu
    'Login...':
        '�?グイ�?...',
    'Signup...':
        'サインアップ...',

    // settings menu
    'Language...':
        'げん�?...',
    'Zoom blocks...':
        'ブロックをズーム...',
    'Blurred shadows':
        '�?んとうめいのかげ',
    'uncheck to use solid drop\nshadows and highlights':
        'チェックをはずすとたんしょく�?かげと\nハイライトに�?りま�?',
    'check to use blurred drop\nshadows and highlights':
        'チェックするとはんとうめいのかげと\nハイライトに�?りま�?',
    'Zebra coloring':
        'じま々でひょうじ',
    'check to enable alternating\ncolors for nested blocks':
        'チェックするといれこ�?�?った\nブロックをじま々でひょうじしま�?',
    'uncheck to disable alternating\ncolors for nested block':
        'チェックをはずすといれこ�?�?った\nブロックをふつう�?ひょうじしま�?',
    'Dynamic input labels':
        'どうてき�?�?ゅうりょくラベル',
    'uncheck to disable dynamic\nlabels for variadic inputs':
        'チェックをはずすとかへんこひきすうの\nどうてきラベ�?をふかにしま�?',
    'check to enable dynamic\nlabels for variadic inputs':
        'チェックするとかへんこひきすうの\nどうてきラベ�?をか�?うにしま�?',
    'Prefer empty slot drops':
        'そら�?スロット�?ドロップをゆるす',
    'settings menu prefer empty slots hint':
        'せっていメニューがそらのスロット�?ヒントをゆるしま�?',
    'uncheck to allow dropped\nreporters to kick out others':
        'チェックをはずすとド�?ップした�?ポーターが\nほかをおしだせるよう�?�?りま�?',
    'Long form input dialog':
        'ひきすうダイア�?グを�?がいけいしき�?する',
    'check to always show slot\ntypes in the input dialog':
        'チェックするとひきすうダイア�?グに\nつね�?スロット�?かたをひょうじします',
    'uncheck to use the input\ndialog in short form':
        'チェックをはずすとひきすうダイア�?グをみじかくひょうじしま�?',
    'Virtual keyboard':
        'かそうキーボード',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'チェックをはずすとモバイ�?ききようの\nかそうキーボードをむこう�?しま�?',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'チェックするとモバイ�?ききようの\nかそうキーボードをゆうこうにしま�?',
    'Input sliders':
        '�?ゅうりょくスライダ�?',
    'uncheck to disable\ninput sliders for\nentry fields':
        'チェックをはずすとにゅうりょくフィー�?ドのスライダーをむこう�?しま�?',
    'check to enable\ninput sliders for\nentry fields':
        'チェックするとにゅうりょくフィー�?ドのスライダーをゆうこう�?しま�?',
    'Clicking sound':
        '�?�?ックおん',
    'uncheck to turn\nblock clicking\nsound off':
        'チェックをはずすとブ�?ックの\n�?�?ックおんをきりま�?',
    'check to turn\nblock clicking\nsound on':
        'チェックをはずすとブ�?ックの\n�?�?ックおんをいれま�?',
    'Animations':
        '�?ニメーション',
    'uncheck to disable\nIDE animations':
        'チェックをはずすとIDEの\n�?ニメーションをきりま�?',
    'check to prioritize\nscript execution':
        'チェックするとス�?�?プトの\nしょりをゆうせんしま�?',
    'uncheck to run scripts\nat normal speed':
        'チェックをはずすとス�?�?プトを\nつうじょうのそくどでじっこうしま�?',
    'check to enable\nIDE animations':
        'チェックするとIDEの\n�?ニメーションをいれま�?',
    'Turbo mode':
        'ターボモード',
    'Thread safe scripts':
        'スク�?プトをス�?ッドセーフにする',
    'uncheck to allow\nscript reentrancy':
        'チェックをはずすとス�?�?プトを\nさい�?ゅうかのうにしま�?',
    'check to disallow\nscript reentrancy':
        'チェックするとス�?�?プトを\nさい�?ゅうふのうにしま�?',
    'Prefer smooth animations':
        '�?めらかな�?ニメーション�?する',
    'uncheck for greater speed\nat variable frame rates':
        'チェックをはずすとフ�?ーム�?ート\nあたりのそくどをあげます',
    'check for smooth, predictable\nanimations across computers':
        'チェックするとコンピューターかん�?\n�?めらかでよそくか�?うな�?ニメーション�?しま�?',

    // inputs
    'with inputs':
        'ひきすう',
    'input names:':
        'ひきすうめい:',
    'Input Names:':
        'ひきすうめい:',
    'input list:':
        'ひきすう�?スト:',

    // context menus:
    'help':
        'ヘル�?',

    // blocks:
    'help...':
        'ヘル�?...',
    'duplicate':
        'ふくせい',
    'make a copy\nand pick it up':
        'コピーをつくって\nそれをつかみます',
    'only duplicate this block':
        'このブロックをコピーするだけ',
    'delete':
        'さくじょ',
    'script pic...':
        'スク�?プト�?がぞ�?...',
    'open a new window\nwith a picture of this script':
        'このスク�?プト�?がぞうをひょうじするあたらしいウィンドウをひらきます',
    'ringify':
        '�?ング�?',
    'unringify':
        'ひリング�?',

    // custom blocks:
    'delete block definition...':
        'ブロック�?ていぎをさくじょ',
    'edit...':
        'へんしゅ�?...',

    // sprites:
    'edit':
        'へんしゅ�?',
    'export...':
        'かきだし...',

    // stage:
    'show all':
        'すべてをひょうじ',
    'pic...':
        'がぞ�?...',
    'open a new window\nwith a picture of the stage':
        'このステージ�?がぞうで\nあたらしいウィンドウをひらく',

    // scripting area
    'clean up':
        'きれいにする',
    'arrange scripts\nvertically':
        'スク�?プトを\nたて�?せいれつしま�?',
    'add comment':
        'コメントをついか',
    'make a block...':
        'ブロックをつくる...',

    // costumes
    'rename':
        '�?まえをへんこ�?',
    'export':
        'かきだし',
    'rename costume':
        'コスチューム�?�?まえをへんこ�?',

    // sounds
    'Play sound':
        'おとをならす',
    'Stop sound':
        'おとをとめる',
    'Stop':
        'てい�?',
    'Play':
        'さいせい',
    'rename sound':
        'おと�?�?まえをへんこ�?',

    // dialogs
    // buttons
    'OK':
        'OK',
    'Ok':
        'OK',
    'Cancel':
        '�?ャンセル',
    'Yes':
        '�?�?',
    'No':
        'いい�?',

    // help
    'Help':
        'ヘル�?',

    // zoom blocks
    'Zoom blocks':
        'ブロックをズーム',
    'build':
        'つくろう',
    'your own':
        'あなたじしん�?',
    'blocks':
        'ブロック�?',
    'normal (1x)':
        'ノーマル (1x)',
    'demo (1.2x)':
        'デモ (1.2x)',
    'presentation (1.4x)':
        'プレゼンテーショ�? (1.4x)',
    'big (2x)':
        'だい (2x)',
    'huge (4x)':
        'とくだい (4x)',
    'giant (8x)':
        'きょだい (8x)',
    'monstrous (10x)':
        'ちょうきょだ�? (10x)',

    // Project Manager
    'Untitled':
        'めいしょうみせってい',
    'Open Project':
        'プロジェ�?トをひら�?',
    'Open':
        'ひら�?',
    '(empty)':
        '(そら)',
    'Saved!':
        'ほぞんしまし�?!',
    'Delete Project':
        'プロジェ�?トをさくじょ',
    'Are you sure you want to delete':
        'ほんとう�?さくじょしますか',
    'rename...':
        '�?まえをへんこ�?...',

    // costume editor
    'Costume Editor':
        'コスチュームエディタ�?',
    'click or drag crosshairs to move the rotation center':
        '�?�?ックかドラッグでかいてんちゅうしんをいどうす�?',

    // project notes
    'Project Notes':
        'プロジェ�?トのメモ',

    // new project
    'New Project':
        'あたらしいプ�?ジェ�?�?',
    'Replace the current project with a new one?':
        'げんざい�?プロジェ�?トをあたらしいも�?でおきかえますか?',

    // open project
    'Open Projekt':
        'プロジェ�?トをひら�?',

    // save project
    'Save Project As...':
        '�?まえをつけてプロジェ�?トをほぞ�?...',

    // export blocks
    'Export blocks':
        'ブロックをかきだ�?',
    'Import blocks':
        'ブロックをよみこ�?',
    'this project doesn\'t have any\ncustom global blocks yet':
        'このプロジェ�?トは�?スタムグ�?ーバ�?ブロックをもっていません',
    'select':
        'せんたく',
    'all':
        'すべ�?',
    'none':
        '�?�?',

    // variable dialog
    'for all sprites':
        'すべてのスプライトよ�?',
    'for this sprite only':
        'このスプライトよ�?',

    // block dialog
    'Change block':
        'ブロックをへんこ�?',
    'Command':
        'コマンド',
    'Reporter':
        '�?ニタ�?',
    'Predicate':
        'じゅつご',

    // block editor
    'Block Editor':
        'ブロックエディタ�?',
    'Apply':
        'てきよう',

    // block deletion dialog
    'Delete Custom Block':
        '�?スタムブ�?ックをさくじ�?',
    'block deletion dialog text':
        'この�?スタムブ�?ックとすべて�?インスタンスを\nさくじょしてもよいですか?',

    // input dialog
    'Create input name':
        'ひきすうめいをさくせ�?',
    'Edit input name':
        'ひきすうめいをへんしゅう',
    'Edit label fragment':
        'ラベ�?�?だんぺんをへんしゅう',
    'Title text':
        'タイトルテキスト',
    'Input name':
        'ひきすうめい',
    'Delete':
        'さくじょ',
    'Object':
        '�?ブジェク�?',
    'Number':
        'かず',
    'Text':
        'テキスト',
    'List':
        '�?スト',
    'Any type':
        'ぜんタイ�?',
    'Boolean (T/F)':
        'しんぎち (�?�?/いい�?)',
    'Command\n(inline)':
        'コマンド\n(インライ�?)',
    'Command\n(C-shape)':
        'コマンド \n(Cけい)',
    'Any\n(unevaluated)':
        '�?んい\n(みひょう�?)',
    'Boolean\n(unevaluated)':
        'しんぎち\n(みひょう�?)',
    'Single input.':
        'たんいつひきすう.',
    'Default Value:':
        'デフォルトち:',
    'Multiple inputs (value is list of inputs)':
        'ふくすう�?ひきすう (あたいはひきすう�?�?スト)',
    'Upvar - make internal variable visible to caller':
        'Upvar - よびだしもとからみえるないぶてき�?へんすう',

   // About Snap
    'About Snap':
        'Snap�?つい�?',
    'Back...':
        'もど�?...',
    'License...':
        'ライセン�?...',
    'Modules...':
        '�?ジュール...',
    'Credits...':
        '�?�?ジッ�?...',
    'Translators...':
        'ほんやくしゃ',
    'License':
        'ライセン�?',
    'current module versions:':
        'げんざい�?�?ジュール�?バージョ�?:',
    'Contributors':
        'こうけんしゃ:',
    'Translations':
        'ほんやく',

    // variable watchers
    'normal':
        'つうじょ�?',
    'large':
        'だい',
    'slider':
        'スライダ�?',
    'slider min...':
        'スライダーのさいしょうち...',
    'slider max...':
        'スライダーのさいだい�?...',
    'import...':
        'よみこみ...',
    'Slider minimum value':
        'スライダーのさいしょうち',
    'Slider maximum value':
        'スライダーのさいだい�?',

    // list watchers
    'length: ':
        '�?がさ: ',

    // coments
    'add comment here...':
        'ここ�?コメントをついか...',

    // drow downs
    // directions
    '(90) right':
        '(90) みぎ',
    '(-90) left':
        '(-90) ひだ�?',
    '(0) up':
        '(0) じょ�?',
    '(180) down':
        '(180) �?',

    // collision detection
    'mouse-pointer':
        'マウスのポインタ�?',
    'edge':
        '�?�?',
    'pen trails':
        'ペン�?きせ�?',

    // costumes
    'Turtle':
        'タートル',
    'Empty':
        'そら',

    // graphical effects
    'ghost':
        'ゆうれい',

    // keys
    'space':
        'スペース',
    'up arrow':
        'うわむきやじる�?',
    'down arrow':
        'したむきやじる�?',
    'right arrow':
        'みぎむきやじる�?',
    'left arrow':
        'ひだりむきやじる�?',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    // messages
    'new...':
        'しん�?...',

    // math functions
    'abs':
        'ぜったい�?',
    'sqrt':
        'へいほうこん',
    'sin':
        'sin',
    'cos':
        'cos',
    'tan':
        'tan',
    'asin':
        'asin',
    'acos':
        'acos',
    'atan':
        'atan',
    'ln':
        'ln',
    'e^':
        'e^',

    // data types
    'number':
        'かず',
    'text':
        'テキスト',
    'Boolean':
        'しんぎち',
    'list':
        '�?スト',
    'command':
        'コマンド',
    'reporter':
        '�?ポーター',
    'predicate':
        'じゅつご',

    // list indices
    'last':
        'さい�?',
    'any':
        '�?んい',

    // missing entries
    'Reference manual':
        '�?ファ�?ンスマニュア�?',
    'Sign in':
        'サインイ�?',
    'User name:':
        'ユーザーめい:',
    'Password:':
        'パス�?ード:',
    'stay signed in on this computer\nuntil logging out':
        '�?グアウトするまでこのコンピューターに\nサインインしたままにする',
    'Sign up':
        'サインアップ',
    'User name:':
        'ユーザーめい:',
    'Password:':
        'パス�?ード:',
    'Birth date:':
        'たんじょうづ�?:',
    'Birth date:':
        'とし:',
    'January':
        '１が�?',
    'February':
        '２が�?',
    'March':
        '３が�?',
    'April':
        '４が�?',
    'May':
        '５が�?',
    'June':
        '６が�?',
    'July':
        '７が�?',
    'August':
        '８が�?',
    'September':
        '９が�?',
    'October':
        '１０がつ',
    'November':
        '１１がつ',
    'December':
        '１２がつ',
    '1993 or before':
        '１９９３�?んいぜん',
    'E-mail address:':
        'でんしメール�?ドレ�?:',
    'Terms of Service...':
        'サービスりようきやく...',
    'Privacy...':
        'こじんじょうほう...',
    'I have read and agree\nto the Terms of Service':
        'サービスりようきやくをよみ\nそれ�?どういします',

};
