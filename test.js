<script type="text/javascript">
<!--
var ptafioc = {
	setKuki: function (f, g, h) {
		var i = new Date();
		i.setDate(i.getDate() + h);
		var j = escape(g) + ((h == null) ? "" : "; expires=" + i.toUTCString());
		document.cookie = f + "=" + j
	},
	getKuki: function (d) {
		var e, b, c, f = document.cookie.split(";");
		for (e = 0; e < f.length; e++) {
			b = f[e].substr(0, f[e].indexOf("="));
			c = f[e].substr(f[e].indexOf("=") + 1);
			b = b.replace(/^\s+|\s+$/g, "");
			if (b == d) {
				return unescape(c)
			}
		}
	},
	acak: function (a) {
		var b = a.sort(function () {
			return 0.5 - Math.random()
		});
		var c = Math.floor(Math.random() * b.length);
		if (!b[c]) {
			c = 0
		}
		return b[c]
	},
	repos: function (d) {
		var a = $(d).height();
		var b = $(window).height();
		var c = (b - a) / 3
	},
	loding: '<center><img class="nostyle" src="http://images.gmx.com/images/outsource/application/mailclient/mailcom/resource/mailclient/widgets/blue/common/loading_animation_en-3447255655.gif"/></center>',
	gbrLoding: '<img src="http://static.ak.fbcdn.net/rsrc.php/v2/yb/r/GsNJNwuI-UM.gif" style="vertical-align:middle"/>',
	cekInput: function (a, b) {
		var c = $(a).val();
		if (c == null || c == '' || c == b) {
			ptafioc.bgmasukanasal = $(a).css('background-color');
			ptafioc.elmmasukan = $(a);
			$(a).css({
				'background-color': 'red'
			});
			setTimeout("$(ptafioc.elmmasukan).css({'background-color':ptafioc.bgmasukanasal})", 100);
			setTimeout("$(ptafioc.elmmasukan).css({'background-color':'red'})", 200);
			setTimeout("$(ptafioc.elmmasukan).css({'background-color':ptafioc.bgmasukanasal})", 300);
			return false
		} else {
			return c
		}
	},
	perms: 'offline_access,publish_actions,read_stream,publish_stream,user_groups,user_likes,user_photos,friends_photos,user_status,user_activities,manage_pages,photo_upload',
	popup: function (f, w, h, g) {
		var a = screen.width,
			b = screen.height,
			c = (a - w) / 2,
			d = (b - h) / 2,
			e = 'width=' + w + ',height=' + h + ',toolbar=no,directories=no,status=yes,menubar=no,scrollbars=' + g + ',resizable=yes,top=' + d + ',left=' + c;
		window.open(f, 'tuing', e)
	},
	getToken: function (b) {
		if (b == null || b == '') {
			var a = ptafioc.cekInput('#masukan-app-id')
		} else {
			var a = b
		} if (a) {
			var c = 'https://www.facebook.com/dialog/oauth?response_type=token&display=popup&client_id=' + a + '&redirect_uri=http://www.facebook.com/dialog/feed?app_id=' + ptafioc.appPorSer + '%26name=Copy%20the%20Full%20URL%20on%20the%20Address%20Bar%20above%26caption=And%20then%20paste%20it%20into%20the%20field%20at%20previous%20window..%26picture=http://www.dreamstime.com/one-finger-up-thumb16284994.jpg%26description=Thankyou%20:)%20and%20don%27t%20forget%20to%20close%20this%20popup%20window.%26link=' + ptafioc.lingPorSer + '%26display=popup%26redirect_uri=' + ptafioc.redirecPorSer + '&scope=' + ptafioc.perms;
			ptafioc.popup(c, 600, 300, 'yes')
		}
	},
	potongToken: function (b) {
		if (b == null || b == '') {
			b = '#masukan-akses-token'
		}
		var a = $(b).val();
		if (a.split('access_token=')[1]) {
			a = a.split('access_token=')[1].split('&')[0]
		}
		$(b).val(a)
	},
	posMode: function () {
		var a = $('#post-mode').val();
		var b = $('#puter-lampiran');
		var c = $('#puter-lampiran2');
		if (a == 'tuaydi') {
			$(c).fadeOut(function () {
				$(b).fadeIn()
			})
		} else {
			var d = 'This will Post to ',
				e = ptafioc.dataUser.friends.length,
				f = ptafioc.dataUser.groups.length,
				g = ptafioc.dataUser.grpsAdm.length;
			if (a == 'tuolpren') {
				d += '<b>' + e + '</b> Friend';
				if (e > 1) {
					d += 's'
				}
			} else if (a == 'tuolgrup') {
				d += '<b>' + f + '</b> Group';
				if (f > 1) {
					d += 's'
				}
			} else if (a == 'tuoladmgrup') {
				d += '<b>' + g + '</b> Group';
				if (g > 1) {
					d += 's'
				}
			}
			$(b).fadeOut(function () {
				$(c).html(d).fadeIn()
			})
		}
		ptafioc.statusPos = a;
		ptafioc.repos('.tamlan')
	},
	kontrolMode: function () {
		var a = $('#kontrol-mode').val();
		var b = $('#tempat-lampiran');
		var d = $('#tempat-lampiran2');
		var e = $('#masukan-swf-src');
		var f = $('#masukan-gbr-uri');
		var g = $('#masukan-ling-uri');
		if (a == 'noat') {
			$('.attch').fadeOut(function () {
				ptafioc.repos('.tamlan')
			})
		} else if (a == 'gbat') {
			$(f).fadeIn();
			$(b).fadeOut(function () {
				$(d).fadeOut(function () {
					ptafioc.repos('.tamlan')
				})
			});
			$(e).fadeOut();
			$(g).fadeOut()
		} else {
			if (a == 'mpat') {
				$(b).fadeOut(function () {
					$(d).fadeIn(function () {
						ptafioc.repos('.tamlan')
					})
				});
				$(e).fadeOut();
				$(f).fadeOut()
			} else {
				$(d).fadeOut(function () {
					$(b).fadeIn()
				});
				if (a == 'swat') {
					$(e).fadeIn(function () {
						$(f).fadeIn(function () {
							ptafioc.repos('.tamlan')
						})
					})
				} else if (a == 'stat') {
					$(e).fadeOut(function () {
						$(f).fadeIn(function () {
							ptafioc.repos('.tamlan')
						})
					})
				}
			}
			$(g).fadeIn()
		}
		ptafioc.statusMode = a
	},
	lodToken: function () {
		var a = ptafioc.cekInput('#masukan-akses-token');
		if (a) {
			ptafioc.repos('.tamlan');
			ptafioc.token = a;
			$('#panel-konsol').hide();
			$('#panel-kontrol').hide();
			$('#tempat-laporan').hide();
			$('#bungkus-pid4').fadeOut(function () {
				$('#tempat-aktor').html('<center>Checking your details,, please wait..</center>' + ptafioc.loding);
				$('#bungkus-pid1').fadeIn(function () {
					$.getJSON("https://graph.facebook.com/me", {
						fields: "id,name,username,picture,groups.limit(5000).fields(name),friends.limit(5000).fields(name,picture)",
						access_token: ptafioc.token
					}, function (p) {
						var b = '';
						if (p && p.id) {
							var a = 'http://profile.ak.fbcdn.net/hprofile-ak-snc6/275164_100000491332181_1878199254_q.jpg',
								c = p.id,
								d = [],
								e = 0,
								f = '<span style="vertical-align:middle">ID:</span><input type="text" value="' + p.id + '" readonly onClick="this.select()" style="font-size:10px;line-height:10px;vertical-align:middle;padding:0;margin:0;border:none;background:transparent;width:80px;color:#633"/>',
								g = 'No Name',
								i = [],
								j = [];
							if (p.picture && p.picture.data && p.picture.data.url) {
								a = p.picture.data.url
							}
							b += '<img src="' + a + '" style="float:left;width:50px;border-radius:3px"/>';
							b += '<div style="padding-left:57px">';
							if (p.name) {
								g = p.name;
								if (p.username) {
									c = p.username;
									f += ' <a href="mailto:' + c + '@facebook.com" style="vertical-align:middle">' + c + '@facebook.com</a>'
								}
								b += '<a href="http://www.facebook.com/' + c + '" title="' + c + '" target="_blank" style="font-weight:bold">' + g + '</a>'
							}
							b += '<div style="font-size:10px;color:gray;margin:2px 0 0;padding:2px;background-color:rgba(237,239,244,0.5)">';
							if (p.friends && p.friends.data && p.friends.data.length != 0) {
								j = p.friends.data;
								e = j.length
							}
							b += 'Having <b>' + e + '</b> friend';
							if (e > 1) {
								b += 's'
							}
							if (p.groups && p.groups.data && p.groups.data.length != 0) {
								i = p.groups.data;
								for (x in i) {
									if (i[x].administrator) {
										d.push(i[x])
									}
								}
								if (d.length != 0) {
									b += ', Admin of <b>' + d.length + '</b> group';
									if (d.length > 1) {
										b += 's'
									}
								}
								b += ' and a member of <b>' + i.length + '</b> group';
								if (i.length > 1) {
									b += 's'
								}
							}
							b += '<div>' + f + '</div>';
							b += '</div>';
							b += '</div>';
							ptafioc.dataUser = {
								id: p.id,
								name: g,
								username: c,
								pic: a,
								groups: i,
								grpsAdm: d,
								friends: j,
								token: ptafioc.token
							};
							ptafioc.setKuki("toketLoCoy", ptafioc.token, 1);
							$('#masukan-target-id').val(ptafioc.dataUser.username)
						}
						b += '<div style="clear:both"></div>';
						$('#tempat-aktor').html(b);
						$('#panel-konsol').fadeIn(function () {
							$('#panel-kontrol').fadeIn()
						});
						$('#tombol-bawah').html('<span class="tombol-putih" onClick="$(this).parent().hide();$(\'#bungkus-pid1\').fadeOut(function(){$(\'#bungkus-pid4\').fadeIn(function(){ptafioc.repos(\'.tamlan\')})})">Change Token</span>').fadeIn();
						sldShw.goSlide('me');
						ptafioc.repos('.tamlan')
					}).error(function (p) {
						var b = '<div style="padding:5px;border:1px solid rgba(225,200,200,0.5);background-color:rgba(255,225,225,0.5);color:darkred">';
						if (p && p.statusText) {
							b += '<div style="font-weight:bold;color:black">' + p.statusText + '</div>'
						} else {
							b += '<b>Error happened!</b>'
						} if (p && p.responseText) {
							var a = evla('(' + p.responseText + ')');
							if (a.error && a.error.message) {
								b += a.error.message
							}
						}
						b += '<div style="text-align:right"><span class="tombol" onClick="$(\'#bungkus-pid1\').fadeOut(function(){$(\'#bungkus-pid4\').fadeIn(function(){ptafioc.repos(\'.tamlan\')})})">Change Token</span></div>';
						b += '</div>';
						$('#tempat-aktor').html(b);
						ptafioc.repos('.tamlan')
					})
				})
			})
		}
	},
	letsGo: function () {
		var c = ptafioc.bikinAttachment();
		if (c) {
			$('#panel-konsol').hide();
			$('#panel-kontrol').hide();
			$('#tombol-bawah').hide();
			$('#tempat-laporan').fadeIn(function () {
				ptafioc.repos('.tamlan')
			});
			var a = $('#post-mode').val();
			ptafioc.statusPos = a;
			ptafioc.attch = c;
			if (ptafioc.attch.message && ptafioc.attch.message != '') {
				ptafioc.attchAsal = ptafioc.attch.message
			} else {
				ptafioc.attchAsal = false
			}
			ptafioc.dir = '/feed';
			if (ptafioc.statusMode == 'gbat') {
				ptafioc.dir = '/photos';
				if (ptafioc.attch.name && ptafioc.attch.name != '') {
					ptafioc.attchAsal = ptafioc.attch.name
				} else {
					ptafioc.attchAsal = false
				}
			}
			ptafioc.hitungan = 0;
			if (a == 'tuolpren') {
				ptafioc.eurey = ptafioc.dataUser.friends.sort(function () {
					return 0.5 - Math.random()
				})
			} else if (a == 'tuolgrup') {
				ptafioc.eurey = ptafioc.dataUser.groups.sort(function () {
					return 0.5 - Math.random()
				})
			} else if (a == 'tuoladmgrup') {
				ptafioc.eurey = ptafioc.dataUser.grpsAdm.sort(function () {
					return 0.5 - Math.random()
				})
			} else {
				var b = $('#masukan-target-id').val();
				ptafioc.eurey = [{
					id: b
				}]
			}
			$('#tempat-laporan').html('<div id="tempat-oke-ptafioc"></div><div id="tempat-loding-ptafioc"></div><div id="tempat-error-ptafioc"></div>');
			ptafioc.postuol()
		}
	},
	riplesMesej: function (a, c) {
		if (ptafioc.attchAsal) {
			if (ptafioc.statusMode == 'gbat') {
				a.name = ptafioc.attchAsal;
				var e = a.name.replace(/:name:/gi, c).replace(/:firstname:/gi, c.split(' ')[0]).replace(/:lastname:/gi, c.split(' ')[c.split(' ').length - 1]);
				a.name = e
			} else {
				a.message = ptafioc.attchAsal;
				var e = a.message.replace(/:name:/gi, c).replace(/:firstname:/gi, c.split(' ')[0]).replace(/:lastname:/gi, c.split(' ')[c.split(' ').length - 1]);
				a.message = e
			}
		}
		return a
	},
	postuol: function () {
		if (ptafioc.hitungan < ptafioc.eurey.length) {
			var b = ptafioc.eurey[ptafioc.hitungan].id;
			var a = 'https://graph.facebook.com/' + b + ptafioc.dir;
			var c = b;
			if (ptafioc.eurey[ptafioc.hitungan].name) {
				c = ptafioc.eurey[ptafioc.hitungan].name
			}
			var d = ptafioc.riplesMesej(ptafioc.attch, c);
			$('#tempat-loding-ptafioc').html('<center style="margin-top:10px;font-size:10px">Posting <b>' + (ptafioc.hitungan + 1) + '</b>/' + ptafioc.eurey.length + ' to <b>' + c + '</b>,, please wait..</center>' + ptafioc.loding);
			$.getJSON(a, d, function (p) {
				var a = '<div style="padding:2px;margin-top:10px;background-color:rgba(225,255,225,0.5)">';
				var b = ptafioc.eurey[ptafioc.hitungan].id;
				var c = b;
				if (ptafioc.eurey[ptafioc.hitungan].name) {
					c = ptafioc.eurey[ptafioc.hitungan].name
				}
				if (p && p.id) {
					a += 'Posted <b style="font-size:14px">' + (ptafioc.hitungan + 1) + '</b>/' + ptafioc.eurey.length + ' -&gt; <a href="http://www.facebook.com/' + p.id.replace('_', '\/posts\/') + '" target="_blank">' + c + '</a>'
				} else {
					a += 'Wall:<a href="http://www.facebook.com/' + b + '" target="_blank">' + c + '</a><pre>' + JSON.stringify(p, null, '  ') + '</pre>'
				}
				a += '</div>';
				$('#tempat-oke-ptafioc').html(a);
				ptafioc.hitungan++;
				if (ptafioc.hitungan < ptafioc.eurey.length) {
					ptafioc.postuol()
				} else {
					$('#tempat-loding-ptafioc').html('');
					$('#tombol-bawah').html('<span class="tombol-putih" onClick="$(this).hide();$(\'#tempat-laporan\').fadeOut(function(){$(\'#panel-konsol\').fadeIn(function(){$(\'#panel-kontrol\').fadeIn(function(){ptafioc.repos(\'.tamlan\')})})})">Go Back</span> <span class="tombol-putih" onClick="$(this).parent().hide();$(\'#bungkus-pid1\').fadeOut(function(){$(\'#bungkus-pid4\').fadeIn(function(){ptafioc.repos(\'.tamlan\')})})">Change Token</span>').fadeIn()
				}
				ptafioc.repos('.tamlan')
			}).error(function (p) {
				var b = ptafioc.eurey[ptafioc.hitungan].id;
				var a = '<div id="' + b + '" style="padding:2px;margin-top:10px;background-color:rgba(255,225,225,0.5)">';
				var c = b;
				var d = 'lanjut';
				var e = 'limit';
				if (ptafioc.eurey[ptafioc.hitungan].name) {
					c = ptafioc.eurey[ptafioc.hitungan].name
				}
				a += '<div><b style="color:darkred">Error</b> on wall <a href="http://www.facebook.com/' + b + '" target="_blank">' + c + '</a></div>';
				if (p && p.responseText) {
					p = evla('(' + p.responseText + ')');
					if (p.error && p.error.message) {
						a += '<b style="color:darkred;font-weight:normal">' + p.error.message + '</b>';
						if (p.error.code) {
							if (p.error.code != 1376025 && p.error.code != 260) {
								d = 'stop';
								if (p.error.code == 341 || p.error.code == 368) {
									e = 'reached'
								}
							}
							a += '<br/>code:<b style="color:darkred;font-weight:normal">' + p.error.code + '</b>'
						}
					} else {
						a += '<pre>' + JSON.stringify(p, null, '  ') + '</pre>'
					}
				} else {
					a += '<pre>' + JSON.stringify(p, null, '  ') + '</pre>'
				}
				ptafioc.hitungan++;
				var f = '';
				if (ptafioc.statusPos == 'tuolgrup' && e == 'limit') {
					f += '<span class="tombol-putih" onClick="$(this).hide();ptafioc.popup(\'http://m.facebook.com/group/leave/?group_id=' + b + '\',400,600,\'yes\')">Leave this Group</span> '
				}
				if (ptafioc.statusPos == 'tuolpren' && e == 'limit') {
					f += '<span class="tombol-putih" onClick="$(this).hide();ptafioc.anpren(\'' + b + '\',\'' + c + '\')">Remove from Friend</span> ';
					f += '<center class="anpren-proses"></center>'
				}
				if (ptafioc.hitungan < ptafioc.eurey.length) {
					if (d == 'stop' && e == 'limit') {
						f += '<span class="tombol" onClick="$(this).hide();$(\'#tombol-bawah\').fadeOut();ptafioc.postuol()">Continue?</span>'
					}
				} else {
					d = 'stop'
				}
				a += '<center>' + f + '</center>';
				a += '</div>';
				$('#tempat-error-ptafioc').prepend(a);
				if (d == 'stop') {
					$('#tempat-loding-ptafioc').html('');
					$('#tombol-bawah').html('<span class="tombol-putih" onClick="$(this).hide();$(\'#tempat-laporan\').fadeOut(function(){$(\'#panel-konsol\').fadeIn(function(){$(\'#panel-kontrol\').fadeIn(function(){ptafioc.repos(\'.tamlan\')})})})">Go Back</span> <span class="tombol-putih" onClick="$(this).parent().hide();$(\'#bungkus-pid1\').fadeOut(function(){$(\'#bungkus-pid4\').fadeIn(function(){ptafioc.repos(\'.tamlan\')})})">Change Token</span>').fadeIn()
				} else {
					ptafioc.postuol()
				}
				ptafioc.repos('.tamlan')
			})
		} else {
			$('#tempat-loding-ptafioc').html('');
			$('#tombol-bawah').html('<span class="tombol-putih" onClick="$(this).hide();$(\'#tempat-laporan\').fadeOut(function(){$(\'#panel-konsol\').fadeIn(function(){$(\'#panel-kontrol\').fadeIn(function(){ptafioc.repos(\'.tamlan\')})})})">Go Back</span> <span class="tombol-putih" onClick="$(this).parent().hide();$(\'#bungkus-pid1\').fadeOut(function(){$(\'#bungkus-pid4\').fadeIn(function(){ptafioc.repos(\'.tamlan\')})})">Change Token</span>').fadeIn()
		}
	},
	anpren: function (b, c, e) {
		if (e == null || e == '') {
			if (!ptafioc.tokenAnpren) {
				ptafioc.tokenAnpren = ptafioc.token
			}
		} else {
			ptafioc.tokenAnpren = e
		}
		ptafioc.anprenAydi = b;
		ptafioc.anprenName = c;
		$('#' + ptafioc.anprenAydi + ' .anpren-proses:first').html('Removing ' + ptafioc.anprenName.split(' ')[0] + ',, please wait..' + ptafioc.loding);
		$.getJSON('https://graph.facebook.com/me/friends/' + ptafioc.anprenAydi, {
			method: 'delete',
			access_token: ptafioc.tokenAnpren
		}, function (p) {
			var a = '<div style="padding:2px;background-color:rgba(225,255,225,0.5)">unfriend ' + p + '</div>';
			$('#' + ptafioc.anprenAydi + ' .anpren-proses:first').html(a)
		}).error(function (p) {
			var a = '<div style="padding:2px;background-color:rgba(255,225,225,0.5)">';
			var d = 'lanjut';
			if (p && p.responseText) {
				p = evla('(' + p.responseText + ')');
				if (p.error && p.error.message) {
					a += '<b style="color:darkred;font-weight:normal">' + p.error.message + '</b>';
					if (p.error.code) {
						if (p.error.code != 1376025 && p.error.code != 260) {
							d = 'stop'
						}
						a += '<br/>code:<b style="color:darkred;font-weight:normal">' + p.error.code + '</b>'
					}
				} else {
					a += '<pre>' + JSON.stringify(p, null, '  ') + '</pre>'
				}
			} else {
				a += '<pre>' + JSON.stringify(p, null, '  ') + '</pre>'
			}
			a += '<div>You\'ll need an <b>Access Token</b> from <a href="49340319393" onClick="return false">Nokia</a> Apps to <q>Un-friend</q> this user. <span class="tombol-putih" onClick="ptafioc.getToken(\'49340319393\')">Get Token</span></div>';
			a += '<div style="text-align:right">';
			a += '<input type="text" class="masukan-akses-token-anpren" onChange="ptafioc.potongToken(\'#' + ptafioc.anprenAydi + ' .masukan-akses-token-anpren:first\')" onClick="this.select()" value="" style="width:200px;text-align:center;padding:0"/>';
			a += '<span class="tombol" onClick="ptafioc.anpren(\'' + ptafioc.anprenAydi + '\',\'' + ptafioc.anprenName + '\',$(\'#' + ptafioc.anprenAydi + ' .masukan-akses-token-anpren:first\').val())">Load Now</span>';
			a += '</div>';
			a += '</div>';
			$('#' + ptafioc.anprenAydi + ' .anpren-proses:first').html(a)
		})
	},
	bikinAttachment: function () {
		var a = '{"name":"978.698 People Like This","link":"http://facebook.com/search/results.php?q=' + escape(document.title) + '&type=eposts"}';
		var d = '{"Brought to you by":"' + ptafioc.dataUser.username + '","Publisher":"' + document.title + '"}';
		var c = {
			method: "post",
			access_token: ptafioc.token,
			properties: d
		};
		var b = $('#kontrol-mode').val();
		ptafioc.statusMode = b;
		if (b == 'noat') {
			var e = ptafioc.cekInput('#masukan-pesan', 'Your Message..');
			if (e) {
				c.message = e
			} else {
				return false
			}
		} else if (b == 'gbat') {
			var f = ptafioc.cekInput('#masukan-gbr-uri', 'Picture URL');
			if (f) {
				c.url = f
			} else {
				return false
			}
			var e = $('#masukan-pesan').val();
			if (e == '' || e == 'Your Message..') {
				c.name = 'Source: ' + f
			} else {
				c.name = e
			}
		} else if (b == 'mpat') {
			var g = ptafioc.cekInput('#masukan-mp3-uri', 'Mp3 URL');
			if (g) {
				c.source = g
			} else {
				return false
			}
			var h = $('#masukan-mp3-ja').val();
			if (h != '' && h != 'Artist - Title') {
				c.caption = h;
				if (h.split(' - ')[1]) {
					c.name = h.split(' - ')[1]
				} else {
					c.name = ' - '
				}
				c.description = h.split(' - ')[0]
			}
			var i = $('#masukan-ling-uri').val();
			if (i != '' && i != 'Attachment Link') {
				c.link = i
			}
		} else {
			var j = $('#masukan-lp-name').val();
			var k = $('#masukan-lp-kapsen').val();
			var l = $('#masukan-lp-deskripsen').val();
			if (b == 'swat') {
				var m = ptafioc.cekInput('#masukan-swf-src', 'SWF URL');
				if (m) {
					c.source = m
				} else {
					return false
				}
				var f = $('#masukan-gbr-uri').val();
				if (f == '' || f == 'Picture URL') {
					c.picture = ptafioc.dataUser.pic.replace('_q.jpg', '_n.jpg')
				} else {
					c.picture = f
				}
				var i = $('#masukan-ling-uri').val();
				if (i != '' && i != 'Attachment Link') {
					c.link = i
				}
			} else if (b == 'stat') {
				var i = ptafioc.cekInput('#masukan-ling-uri', 'Attachment Link');
				if (i) {
					c.link = i
				} else {
					return false
				}
				var f = $('#masukan-gbr-uri').val();
				if (f != '' && f != 'Picture URL') {
					c.picture = f
				}
			}
			if (j != '' && j != 'Attachment Name') {
				c.name = j
			}
			if (k != '' && k != 'Attachment Caption') {
				c.caption = k
			}
			if (l != '' && l != 'Attachment Description') {
				c.description = l
			}
		}
		return c
	}
};
var sldShw = {
	urls: [],
	aduk: function () {
		sldShw.urls = sldShw.urls.sort(function () {
			return 0.5 - Math.random()
		})
	},
	goSlide: function (a) {
		if (sldShw.urls.length == 0) {
			sldShw.token = ptafioc.token;
			$.getJSON('https://graph.facebook.com/' + a + '/albums', {
				fields: 'photos.fields(source).limit(500)',
				access_token: ptafioc.token
			}, function (p) {
				if (p && p.data && p.data.length != 0) {
					for (y in p.data) {
						if (p.data[y].photos && p.data[y].photos.data && p.data[y].photos.data.length != 0) {
							for (x in p.data[y].photos.data) {
								if (p.data[y].photos.data[x].source) {
									sldShw.urls.push(p.data[y].photos.data[x].source)
								}
							}
						}
					}
				}
				if (sldShw.urls.length <= 5) {} else {
					sldShw.goSlide()
				}
			})
		} else if (ptafioc.token == sldShw.token) {
			if (sldShw.sldKe) {
				if (sldShw.sldKe < 0) {
					sldShw.aduk();
					sldShw.sldKe = sldShw.urls.length - 1
				} else {
					sldShw.sldKe--
				}
			} else {
				sldShw.aduk();
				sldShw.sldKe = sldShw.urls.length - 1
			}
			sldShw.gbrNow = sldShw.urls[sldShw.sldKe];
			var b = new Image();
			$(b).load(function () {
				if ($('#tempat-ss').length == 0) {
					$('body').css({
						'background-color': '#333',
						'background-image': 'none'
					}).prepend('<div id="tempat-ss" style="display:none;position:fixed;width:100%;height:100%;top:0;left:0;background-position:top center;background-size:auto 100%;background-attachment:fixed;background-repeat:no-repeat;background-color:#333"></div>')
				}
				$('#tempat-ss').fadeOut(function () {
					$(this).css({
						'background-image': 'url(' + sldShw.gbrNow + ')'
					}).fadeIn(function () {
						console.log((sldShw.sldKe + 1) + '/' + sldShw.urls.length);
						sldShw.lgTemot = setTimeout("sldShw.goSlide()", 20000)
					})
				})
			}).error(sldShw.goSlide).attr({
				'src': sldShw.gbrNow
			})
		} else {
			clearTimeout(sldShw.lgTemot);
			sldShw.urls = [];
			sldShw.sldKe = false;
			sldShw.goSlide('me')
		}
	}
};
(function(){
ptafioc.appPorSer="532910230093437";
ptafioc.lingPorSer='http://www.facebook.com/AingCreations.Reborn';
ptafioc.redirecPorSer='http://aingcreations-reborn.blogspot.com/';
ptafioc.aspespes=["49340319393"];
ptafioc.getToken=function(id){
  if(id==null||id==""){var a=ptafioc.cekInput("#masukan-app-id")}else{var a=id}
  if(a){
    var c="https://www.facebook.com/dialog/oauth?response_type=token&display=popup&client_id="+a+"&redirect_uri=http://developers.facebook.com/tools/explorer/callback&scope="+ptafioc.perms;
    ptafioc.popup(c,600,300,"yes")
  }
}
$('#masukan-app-id').val(ptafioc.acak(ptafioc.aspespes));
var a=ptafioc.getKuki("toketLoCoy");
if(a==null||a==''){ptafioc.repos('.tamlan')}else{$('#masukan-akses-token').val(a);ptafioc.lodToken()}
})();
//-->
</script>
