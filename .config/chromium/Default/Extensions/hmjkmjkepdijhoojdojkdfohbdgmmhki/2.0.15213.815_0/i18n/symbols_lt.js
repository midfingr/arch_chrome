var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0\u00a0t\u016bkst."},1E4:{other:"00\u00a0t\u016bkst."},1E5:{other:"000\u00a0t\u016bkst."},1E6:{other:"0\u00a0mln."},1E7:{other:"00\u00a0mln."},1E8:{other:"000\u00a0mln."},1E9:{other:"0\u00a0mlrd."},1E10:{other:"00\u00a0mlrd."},1E11:{other:"000\u00a0mlrd."},1E12:{other:"0\u00a0trln."},1E13:{other:"00\u00a0trln."},1E14:{other:"000\u00a0trln."}},a:{1E3:{other:"0 t\u016bkstan\u010di\u0173"},1E4:{other:"00 t\u016bkstan\u010di\u0173"},1E5:{other:"000 t\u016bkstan\u010di\u0173"},
1E6:{other:"0 milijon\u0173"},1E7:{other:"00 milijon\u0173"},1E8:{other:"000 milijon\u0173"},1E9:{other:"0 milijard\u0173"},1E10:{other:"00 milijard\u0173"},1E11:{other:"000 milijard\u0173"},1E12:{other:"0 trilijon\u0173"},1E13:{other:"00 trilijon\u0173"},1E14:{other:"000 trilijon\u0173"}}};var d={I:"y",la:"y G",J:"MMM y",K:"MMMM y",s:"MMM d",u:"MMMM dd",w:"M/d",v:"MMMM d",V:"MMM d, y",H:"EEE, MMM d",ja:"EEE, MMM d, y",f:"d"},d={I:"y",la:"y G",J:"y-MM",K:"y LLLL",s:"MM-dd",u:"MMMM dd",w:"MM-d",v:"MMMM d",V:"y-MM-dd",H:"MM-dd, EEE",ja:"y-MM-dd, EEE",f:"dd"};var h;
h={R:["pr. Kr.","po Kr."],P:["prie\u0161 Krist\u0173","po Kristaus"],W:"SVKBGBLRRSLG".split(""),ca:"SVKBGBLRRSLG".split(""),U:"sausio vasario kovo baland\u017eio gegu\u017e\u0117s bir\u017eelio liepos rugpj\u016b\u010dio rugs\u0117jo spalio lapkri\u010dio gruod\u017eio".split(" "),ba:"sausis vasaris kovas balandis gegu\u017e\u0117 bir\u017eelis liepa rugpj\u016btis rugs\u0117jis spalis lapkritis gruodis".split(" "),Z:"saus. vas. kov. bal. geg. bir\u017e. liep. rugp. rugs. spal. lapkr. gruod.".split(" "),ea:"saus. vas. kov. bal. geg. bir\u017e. liep. rugp. rugs. spal. lapkr. gruod.".split(" "),
ia:"sekmadienis pirmadienis antradienis tre\u010diadienis ketvirtadienis penktadienis \u0161e\u0161tadienis".split(" "),ga:"sekmadienis pirmadienis antradienis tre\u010diadienis ketvirtadienis penktadienis \u0161e\u0161tadienis".split(" "),aa:"sk pr an tr kt pn \u0161t".split(" "),fa:"sk pr an tr kt pn \u0161t".split(" "),X:"SPATKP\u0160".split(""),da:"SPATKP\u0160".split(""),$:["I k.","II k.","III k.","IV k."],Y:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"],M:["prie\u0161piet","popiet"],
N:["y 'm'. MMMM d 'd'., EEEE","y 'm'. MMMM d 'd'.","y-MM-dd","y-MM-dd"],ha:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],O:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],S:0,ka:[5,6],T:3};var l={h:".",l:",",B:"%",L:"0",F:"+",o:"-",j:"E",D:"\u2030",m:"\u221e",A:"NaN",g:"#,##0.###",G:"#E0",C:"#,##0%",c:"\u00a4#,##0.00",i:"USD"},l={h:",",l:"\u00a0",B:"%",L:"0",F:"+",o:"\u2212",j:"\u00d710^",D:"\u2030",m:"\u221e",A:"NaN",g:"#,##0.###",G:"#E0",C:"#,##0\u00a0%",c:"#,##0.00\u00a0\u00a4",i:"EUR"};b("I18N_DATETIMESYMBOLS_ERAS",h.R);b("I18N_DATETIMESYMBOLS_ERANAMES",h.P);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.W);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.ca);b("I18N_DATETIMESYMBOLS_MONTHS",h.U);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.ba);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Z);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.ea);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ia);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ga);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.fa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.X);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.da);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.$);b("I18N_DATETIMESYMBOLS_QUARTERS",h.Y);b("I18N_DATETIMESYMBOLS_AMPMS",h.M);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.N);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ha);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.O);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",h.na);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.S);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ka);b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.T);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.I);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.J);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.s);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.u);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.w);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.v);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.H);
b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.f);void 0!==h.ma&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ma);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.h);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.B);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.L);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.F);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.o);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.j);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.D);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.m);
b("I18N_NUMBERFORMATSYMBOLS_NAN",l.A);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.g);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.C);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.i);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);