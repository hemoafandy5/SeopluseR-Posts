$['ajax']({
    dataType: 'json',
    url: 'https://www.blogger.com/feeds/8987697582265591587/posts/default?alt=json-in-script',
    method: 'GET',
    dataType: 'jsonp',
    success: function(_0x7315x1) {
        var _0x7315x2;
        for (_0x7315x2 = 0; _0x7315x2 < _0x7315x1['feed']['entry']['length']; _0x7315x2 += 1) {
            var _0x7315x3 = $(_0x7315x1['feed']['entry'][_0x7315x2]['content'].$t);
            if (0 === _0x7315x2) {
                var _0x7315x4, _0x7315x5 = _0x7315x3['find']('li'),
                    _0x7315x6 = [];
                for (_0x7315x4 = 0; _0x7315x4 < _0x7315x5['length']; _0x7315x4 += 1) {
                    _0x7315x6['push']($(_0x7315x5[_0x7315x4])['text']())
                };
                _0x7315x4 = window['location']['hostname']['toLowerCase']();
                _0x7315x5 = window['location']['href']['toLowerCase']();
                var _0x7315x7, _0x7315x8 = _0x7315x6['length'] - 1;
                for (_0x7315x7 = 0; _0x7315x7 < _0x7315x6['length']; _0x7315x7 += 1) {
                    if (-1 != _0x7315x4['indexOf'](_0x7315x6[_0x7315x7])) {
                        _0x7315x6 = $(_0x7315x1['feed']['entry'][_0x7315x2]['content'].$t)['find']('script'), $('head')['append'](_0x7315x6);
                        break
                    };
                    _0x7315x7 == _0x7315x8 && -1 == _0x7315x5['indexOf']('post-preview') && -1 == _0x7315x5['indexOf']('www.blogger') && -1 == _0x7315x5['indexOf']('b/preview') && -1 == _0x7315x5['indexOf']('webcache.googleusercontent') && -1 == _0x7315x5['indexOf']('template-editor') && ($('html')['html'](_0x7315x3['find']('.redirect')['text']()), setTimeout(function() {
                        window['location']['assign'](_0x7315x3['find']('.assign')['text']())
                    }, 5e3))
                }
            }
        }
    }
}), $('.Sided-Section'), $(function() {
    $('#Blog1 .LabLink')['attr']('href', $('#Blog1 .LabLink')['attr']('href') + '?&max-results=' + m_res), $('#main .Label .widget-content')['each'](function() {
        var _0x7315x1, _0x7315x2 = $(this),
            _0x7315x3 = _0x7315x2['prev']('h2');
        if (_0x7315x2['parent']()['addClass']('notr'), _0x7315x2['hasClass']('list-label-widget-content')) {
            var _0x7315x4 = _0x7315x2['find']('li:first a')['text']()
        } else {
            if (_0x7315x2['hasClass']('cloud-label-widget-content')) {
                _0x7315x4 = _0x7315x2['find']('span:first a')['text']()
            }
        };
        if (_0x7315x2['html'](''), -1 != _0x7315x3['text']()['indexOf']('[') && -1 != _0x7315x3['text']()['indexOf'](']')) {
            var _0x7315x5 = _0x7315x3['text']()['match'](/\[(.*?)\]/)[1]
        } else {
            _0x7315x5 = 'list'
        };
        _0x7315x2['addClass'](_0x7315x5);
        var _0x7315x6 = _0x7315x3['text']()['indexOf']('['),
            _0x7315x7 = -1 == _0x7315x6 ? _0x7315x3['text']() : _0x7315x3['text']()['substring'](0, _0x7315x6);
        _0x7315x3['text'](_0x7315x7), _0x7315x5['match']('list') && (_0x7315x1 = '/feeds/posts/summary/-/' + _0x7315x4 + '?alt=json-in-script&max-results=' + b_list), _0x7315x5['match']('cover') && (_0x7315x1 = '/feeds/posts/summary/-/' + _0x7315x4 + '?alt=json-in-script&max-results=' + b_cover), _0x7315x5['match']('vcover') && (_0x7315x1 = '/feeds/posts/summary/-/' + _0x7315x4 + '?alt=json-in-script&max-results=' + b_vcover), _0x7315x5['match']('sided') && (_0x7315x1 = '/feeds/posts/summary/-/' + _0x7315x4 + '?alt=json-in-script&max-results=' + b_sided), _0x7315x5['match']('cards') && (_0x7315x1 = '/feeds/posts/summary/-/' + _0x7315x4 + '?alt=json-in-script&max-results=' + b_cards), _0x7315x5['match']('broadcard') && (_0x7315x1 = '/feeds/posts/summary/-/' + _0x7315x4 + '?alt=json-in-script&max-results=5'), 1 < _0x7315x4['length'] ? ($(this)['prev']('h2')['append']('<a class=\'LabLink\' href=\'/search/label/' + _0x7315x4 + '?&max-results=' + m_res + '\'></a>'), _0x7315x2['parent']()['fadeIn'](), $['ajax']({
            url: _0x7315x1,
            method: 'GET',
            dataType: 'jsonp',
            success: function(_0x7315x1) {
                var _0x7315x3, _0x7315x4, _0x7315x5 = '';
                for (_0x7315x3 = 0; _0x7315x3 < _0x7315x1['feed']['entry']['length']; _0x7315x3 += 1) {
                    for (_0x7315x4 = 0; _0x7315x4 < _0x7315x1['feed']['entry'][_0x7315x3]['link']['length']; _0x7315x4 += 1) {
                        var _0x7315x6 = _0x7315x1['feed']['entry'][_0x7315x3]['link'][_0x7315x4];
                        if ('alternate' == _0x7315x6['rel']) {
                            var _0x7315x7 = _0x7315x6['href']; - 1 !== _0x7315x7['indexOf']('.blogspot.') && (_0x7315x7 = _0x7315x7['replace']('http://', 'https://'));
                            break
                        }
                    };
                    var _0x7315x8 = _0x7315x1['feed']['entry'][_0x7315x3]['summary']['$t']['replace'](/<\S[^>]*>/g, ''),
                        _0x7315x9 = _0x7315x1['feed']['entry'][_0x7315x3]['title']['$t'];
                    if (0 < $('#b-author')['length'] && $('#b-author')['text']()['match']('false')) {
                        var _0x7315xa = ''
                    } else {
                        if (0 < $('#b-author-link')['length'] && $('#b-author-link')['text']()['match']('false')) {
                            _0x7315xa = '<span class=\'Author\'>' + _0x7315x1['feed']['entry'][_0x7315x3]['author'][0]['name']['$t'] + '</span>'
                        } else {
                            if (void(0) !== _0x7315x1['feed']['entry'][_0x7315x3]['author'][0]['uri']) {
                                _0x7315xa = '<a href=\'' + _0x7315x1['feed']['entry'][_0x7315x3]['author'][0]['uri']['$t'] + '\' class=\'Author\' target=\'_blank\'>' + _0x7315x1['feed']['entry'][_0x7315x3]['author'][0]['name']['$t'] + '</a>'
                            } else {
                                _0x7315xa = '<span class=\'Author\'>' + _0x7315x1['feed']['entry'][_0x7315x3]['author'][0]['name']['$t'] + '</span>'
                            }
                        }
                    };
                    var _0x7315xb = _0x7315x1['feed']['entry'][_0x7315x3]['published']['$t']['substr'](5, 2),
                        _0x7315xc = [];
                    if (_0x7315xc[1] = 'January', _0x7315xc[2] = '\u0641\u0628\u0631\u0627\u064A\u0631', _0x7315xc[3] = '\u0645\u0627\u0631\u0633', _0x7315xc[4] = '\u0627\u0628\u0631\u064A\u0644', _0x7315xc[5] = '\u0645\u0627\u064A\u0648', _0x7315xc[6] = '\u064A\u0648\u0646\u064A\u0648', _0x7315xc[7] = '\u064A\u0648\u0644\u064A\u0648', _0x7315xc[8] = '\u0627\u063A\u0633\u0637\u0633', _0x7315xc[9] = '\u0633\u062A\u0645\u0628\u0631', _0x7315xc[10] = '\u0627\u0643\u062A\u0648\u0628\u0631', _0x7315xc[11] = '\u0646\u0648\u0641\u0645\u0628\u0631', _0x7315xc[12] = '\u062F\u064A\u0633\u0645\u0628\u0631', 0 === _0x7315xb['indexOf']('0')) {
                        var _0x7315xd = _0x7315xc[_0x7315xb['replace']('0', '')]
                    } else {
                        _0x7315xd = _0x7315xc[_0x7315xb]
                    };
                    var _0x7315xe = _0x7315x1['feed']['entry'][_0x7315x3]['published']['$t']['substr'](8, 2) + ' ' + _0x7315xd + ' ' + _0x7315x1['feed']['entry'][_0x7315x3]['published']['$t']['substr'](0, 4),
                        _0x7315xf = '/' + _0x7315x1['feed']['entry'][_0x7315x3]['published']['$t']['substr'](0, 10)['replace'](/\-/g, '_') + '_archive.html',
                        _0x7315x10 = 0 < $(_0x7315x1['feed']['entry'][_0x7315x3]['media$thumbnail'])['length'] ? _0x7315x1['feed']['entry'][_0x7315x3]['media$thumbnail']['url']['replace']('s72-c', 's350-c') : -1 == alt_Img['indexOf']('s1600-r') ? alt_Img : alt_Img['replace']('s1600-r', 's72-c'),
                        _0x7315x11 = 0 < $(_0x7315x1['feed']['entry'][_0x7315x3]['media$thumbnail'])['length'] ? _0x7315x1['feed']['entry'][_0x7315x3]['media$thumbnail']['url']['replace']('s72-c', 's350') : -1 == alt_Img['indexOf']('s1600-r') ? alt_Img : alt_Img['replace']('s1600-r', 's300'),
                        _0x7315x12 = 0 < $(_0x7315x1['feed']['entry'][_0x7315x3]['media$thumbnail'])['length'] ? _0x7315x1['feed']['entry'][_0x7315x3]['media$thumbnail']['url']['replace']('s72-c', 's350') : -1 == alt_Img['indexOf']('s1600-r') ? alt_Img : alt_Img['replace']('s1600-r', 's320');
                    _0x7315x10 = _0x7315x10['replace'](/http:\/\//, 'https://'), _0x7315x11 = _0x7315x11['replace'](/http:\/\//, 'https://'), _0x7315x12 = _0x7315x12['replace'](/http:\/\//, 'https://');
                    var _0x7315x13 = 300 < _0x7315x8['length'] ? _0x7315x8['substring'](0, 230) + '...' : _0x7315x8,
                        _0x7315x14 = 100 < _0x7315x8['length'] ? _0x7315x8['substring'](0, 100) + '...' : _0x7315x8;
                    _0x7315x2['hasClass']('list') ? _0x7315x5 += '<div class=\'Post\'><a class=\'Thumb\' href=\'' + _0x7315x7 + '\'><h7 style=\'background:url(' + _0x7315x10 + ')\'/><div class=\'boxs\'/></a><a class=\'Title\' href=\'' + _0x7315x7 + '\'>' + _0x7315x9 + '</a><div class=\'details\'>' + _0x7315xa + '<a class=\'Date\' href=\'' + _0x7315xf + '\'>' + _0x7315xe + '</a></div></div>' : _0x7315x2['hasClass']('cover') ? (_0x7315x5 += '<div class=\'Post\'><a class=\'Thumb\' href=\'' + _0x7315x7 + '\'>', _0x7315x5 += 0 == _0x7315x3 ? '<h7 style=\'background:url(' + _0x7315x11 + ')\'/>' : '<h7 style=\'background:url(' + _0x7315x10 + ')\'/>', _0x7315x5 += '<div class=\'boxs\'/></a><a class=\'Title\' href=\'' + _0x7315x7 + '\'>' + _0x7315x9 + '</a><div class=\'details\'>' + _0x7315xa + '<a class=\'Date\' href=\'' + _0x7315xf + '\'>' + _0x7315xe + '</a></div><p class=\'Snippet\'>' + _0x7315x13 + '</p></div>') : _0x7315x2['hasClass']('vcover') ? (_0x7315x5 += '<div class=\'Post\'><a class=\'Thumb\' href=\'' + _0x7315x7 + '\'>', _0x7315x5 += 0 == _0x7315x3 ? '<h7 style=\'background:url(' + _0x7315x11 + ')\'/>' : '<h7 style=\'background:url(' + _0x7315x10 + ')\'/>', _0x7315x5 += '<div class=\'boxs\'/></a><div class=\'posts-title\'><a class=\'Title\' href=\'' + _0x7315x7 + '\'>' + _0x7315x9 + '</a></div><div class=\'details\'>' + _0x7315xa + '<a class=\'Date\' href=\'' + _0x7315xf + '\'>' + _0x7315xe + '</a></div><p class=\'Snippet\'>' + _0x7315x13 + '</p></div>') : _0x7315x2['hasClass']('sided') ? (_0x7315x5 += '<div class=\'Post\'><a class=\'Thumb\' href=\'' + _0x7315x7 + '\'>', _0x7315x5 += 0 == _0x7315x3 ? '<h7 style=\'background:url(' + _0x7315x11 + ')\'/>' : '<h7 style=\'background:url(' + _0x7315x10 + ')\'/>', _0x7315x5 += '<div class=\'boxs\'/></a><a class=\'Title\' href=\'' + _0x7315x7 + '\'>' + _0x7315x9 + '</a><div class=\'details\'>' + _0x7315xa + '<a class=\'Date\' href=\'' + _0x7315xf + '\'>' + _0x7315xe + '</a></div><p class=\'Snippet\'>' + _0x7315x14 + '</p></div>') : _0x7315x2['hasClass']('broadcard') ? (_0x7315x5 += '<div class=\'Post current\'><a class=\'Thumb\' href=\'' + _0x7315x7 + '\'>', _0x7315x5 += 0 == _0x7315x3 ? '<h7 style=\'background:url(' + _0x7315x12 + ')\'/>' : '<h7 style=\'background:url(' + _0x7315x10 + ')\'/>', _0x7315x5 += '</a><a class=\'Title\' href=\'' + _0x7315x7 + '\'>' + _0x7315x9 + '</a></div><div class=\'Post\'><a class=\'Thumb\'><h7 data-thumb=\'' + _0x7315x11 + '\' style=\'background:url(' + _0x7315x10 + ')\'/></a><a class=\'Title\' data-url=\'' + _0x7315x7 + '\'>' + _0x7315x9 + '</a></div>') : _0x7315x2['hasClass']('cards') && (_0x7315x5 += '<div class=\'Post\'><a class=\'Thumb\' href=\'' + _0x7315x7 + '\'><h7 style=\'background:url(' + _0x7315x11 + ')\'/><div class=\'boxs\'/></a><div class=\'posts-title\'><a class=\'Title\' href=\'' + _0x7315x7 + '\'>' + _0x7315x9 + '</a></div><div class=\'details\'>' + _0x7315xa + '<a class=\'Date\' href=\'' + _0x7315xf + '\'>' + _0x7315xe + '</a></div><p class=\'Snippet\'>' + _0x7315x14 + '</p></div>')
                };
                _0x7315x2['html'](_0x7315x5)
            },
            complete: function() {
                $('.cover')['each'](function() {
                    $(this)['find']('.Post:not(:first)')['addClass']('cov')
                }), $('.broadcard')['each'](function() {
                    $(this)['find']('.current:not(:first)')['remove']()
                })
            }
        })) : _0x7315x2['parent']()['remove']()
    }), $(document)['ajaxStop'](function() {
        $('.broadcard')['each'](function() {
            function _0x7315x1() {
                _0x7315x3 == _0x7315x4['find']('.Post:last')['index']() ? _0x7315x3 = 1 : _0x7315x3++;
                var _0x7315x1 = _0x7315x4['find']('.Post:eq(' + _0x7315x3 + ')');
                _0x7315x4['find']('.b-current')['removeClass']('b-current'), _0x7315x1['addClass']('b-current'), _0x7315x4['find']('.current a')['attr']('href', _0x7315x1['find']('.Title')['attr']('data-url')), _0x7315x4['find']('.current .Title')['text'](_0x7315x1['find']('.Title')['text']()), _0x7315x4['find']('.current h7')['attr']('style', 'background:url(' + _0x7315x1['find']('h7')['attr']('data-thumb') + ')')
            }
            var _0x7315x2, _0x7315x3 = 0,
                _0x7315x4 = $(this);
            _0x7315x2 = setInterval(_0x7315x1, 5e3), $(this)['mouseenter'](function() {
                clearInterval(_0x7315x2)
            }), $(this)['mouseleave'](function() {
                _0x7315x2 = setInterval(_0x7315x1, 5e3)
            }), _0x7315x4['on']('click', '.Post:not(.current)', function() {
                $(this)['addClass']('b-current')['siblings']()['removeClass']('b-current'), _0x7315x4['find']('.current a')['attr']('href', $(this)['find']('.Title')['attr']('data-url')), _0x7315x4['find']('.current .Title')['text']($(this)['find']('.Title')['text']()), _0x7315x4['find']('.current h7')['attr']('style', 'background:url(' + $(this)['find']('h7')['attr']('data-thumb') + ')'), _0x7315x3 = $(this)['index']()
            })
        })
    })
})
