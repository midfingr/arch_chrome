var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0\u00a0\u0939"},1E4:{other:"00\u00a0\u0939"},1E5:{other:"0\u00a0\u0932\u093e\u0916"},1E6:{other:"00\u00a0\u0932\u093e\u0916"},1E7:{other:"0\u00a0\u0915\u094b\u091f\u0940"},1E8:{other:"00\u00a0\u0915\u094b\u091f\u0940"},1E9:{other:"0\u00a0\u0905\u092c\u094d\u091c"},1E10:{other:"00\u00a0\u0905\u092c\u094d\u091c"},1E11:{other:"0\u00a0\u0916\u0930\u094d\u0935"},1E12:{other:"00\u00a0\u0916\u0930\u094d\u0935"},1E13:{other:"0\u00a0\u092a\u0926\u094d\u092e"},
1E14:{other:"00\u00a0\u092a\u0926\u094d\u092e"}},a:{1E3:{other:"0 \u0939\u091c\u093e\u0930"},1E4:{other:"00 \u0939\u091c\u093e\u0930"},1E5:{other:"000 \u0939\u091c\u093e\u0930"},1E6:{other:"0 \u0926\u0936\u0932\u0915\u094d\u0937"},1E7:{other:"00 \u0926\u0936\u0932\u0915\u094d\u0937"},1E8:{other:"000 \u0926\u0936\u0932\u0915\u094d\u0937"},1E9:{other:"0 \u092e\u0939\u093e\u092a\u0926\u094d\u092e"},1E10:{other:"00 \u092e\u0939\u093e\u092a\u0926\u094d\u092e"},1E11:{other:"000 \u092e\u0939\u093e\u092a\u0926\u094d\u092e"},
1E12:{other:"0 \u0916\u0930\u092c"},1E13:{other:"00 \u0916\u0930\u092c"},1E14:{other:"000 \u0916\u0930\u092c"}}};var d={I:"y",ma:"y G",J:"MMM y",K:"MMMM y",s:"MMM d",u:"MMMM dd",w:"M/d",v:"MMMM d",W:"MMM d, y",H:"EEE, MMM d",ka:"EEE, MMM d, y",f:"d"},d={I:"y",ma:"G y",J:"MMM y",K:"MMMM y",s:"d MMM",u:"dd MMMM",w:"d/M",v:"d MMMM",W:"d MMM, y",H:"EEE, d MMM",ka:"EEE, d, MMM y",f:"d"};var h;
h={L:2406,S:["\u0907. \u0938. \u092a\u0942.","\u0907. \u0938."],R:["\u0908\u0938\u0935\u0940\u0938\u0928\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u0935\u0940\u0938\u0928"],X:"\u091c\u093e \u092b\u0947 \u092e\u093e \u090f \u092e\u0947 \u091c\u0942 \u091c\u0941 \u0911 \u0938 \u0911 \u0928\u094b \u0921\u093f".split(" "),da:"\u091c\u093e \u092b\u0947 \u092e\u093e \u090f \u092e\u0947 \u091c\u0942 \u091c\u0941 \u0911 \u0938 \u0911 \u0928\u094b \u0921\u093f".split(" "),V:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u090f\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0942\u0928 \u091c\u0941\u0932\u0948 \u0911\u0917\u0938\u094d\u091f \u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930 \u0911\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930 \u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(" "),ca:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u090f\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0942\u0928 \u091c\u0941\u0932\u0948 \u0911\u0917\u0938\u094d\u091f \u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930 \u0911\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930 \u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(" "),
$:"\u091c\u093e\u0928\u0947 \u092b\u0947\u092c\u094d\u0930\u0941 \u092e\u093e\u0930\u094d\u091a \u090f\u092a\u094d\u0930\u093f \u092e\u0947 \u091c\u0942\u0928 \u091c\u0941\u0932\u0948 \u0911\u0917 \u0938\u092a\u094d\u091f\u0947\u0902 \u0911\u0915\u094d\u091f\u094b \u0928\u094b\u0935\u094d\u0939\u0947\u0902 \u0921\u093f\u0938\u0947\u0902".split(" "),fa:"\u091c\u093e\u0928\u0947 \u092b\u0947\u092c\u094d\u0930\u0941 \u092e\u093e\u0930\u094d\u091a \u090f\u092a\u094d\u0930\u093f \u092e\u0947 \u091c\u0942\u0928 \u091c\u0941\u0932\u0948 \u0911\u0917 \u0938\u092a\u094d\u091f\u0947\u0902 \u0911\u0915\u094d\u091f\u094b \u0928\u094b\u0935\u094d\u0939\u0947\u0902 \u0921\u093f\u0938\u0947\u0902".split(" "),
ja:"\u0930\u0935\u093f\u0935\u093e\u0930 \u0938\u094b\u092e\u0935\u093e\u0930 \u092e\u0902\u0917\u0933\u0935\u093e\u0930 \u092c\u0941\u0927\u0935\u093e\u0930 \u0917\u0941\u0930\u0941\u0935\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u0936\u0928\u093f\u0935\u093e\u0930".split(" "),ha:"\u0930\u0935\u093f\u0935\u093e\u0930 \u0938\u094b\u092e\u0935\u093e\u0930 \u092e\u0902\u0917\u0933\u0935\u093e\u0930 \u092c\u0941\u0927\u0935\u093e\u0930 \u0917\u0941\u0930\u0941\u0935\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u0936\u0928\u093f\u0935\u093e\u0930".split(" "),
ba:"\u0930\u0935\u093f \u0938\u094b\u092e \u092e\u0902\u0917\u0933 \u092c\u0941\u0927 \u0917\u0941\u0930\u0941 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),ga:"\u0930\u0935\u093f \u0938\u094b\u092e \u092e\u0902\u0917\u0933 \u092c\u0941\u0927 \u0917\u0941\u0930\u0941 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),Y:"\u0930 \u0938\u094b \u092e\u0902 \u092c\u0941 \u0917\u0941 \u0936\u0941 \u0936".split(" "),ea:"\u0930 \u0938\u094b \u092e\u0902 \u092c\u0941 \u0917\u0941 \u0936\u0941 \u0936".split(" "),
aa:["\u0924\u093f\u0967","\u0924\u093f\u0968","\u0924\u093f\u0969","\u0924\u093f\u096a"],Z:["\u092a\u094d\u0930\u0925\u092e \u0924\u093f\u092e\u093e\u0939\u0940","\u0926\u094d\u0935\u093f\u0924\u0940\u092f \u0924\u093f\u092e\u093e\u0939\u0940","\u0924\u0943\u0924\u0940\u092f \u0924\u093f\u092e\u093e\u0939\u0940","\u091a\u0924\u0941\u0930\u094d\u0925 \u0924\u093f\u092e\u093e\u0939\u0940"],N:["\u092e.\u092a\u0942.","\u092e.\u0909."],O:["EEEE, d MMMM, y","d MMMM, y","d MMM, y","d/M/yy"],ia:["h:mm:ss a zzzz",
"h:mm:ss a z","h:mm:ss a","h:mm a"],P:["{1} '\u0930\u094b\u091c\u0940' {0}","{1} '\u0930\u094b\u091c\u0940' {0}","{1}, {0}","{1}, {0}"],T:6,la:[6,6],U:5};var l={h:".",l:",",B:"%",M:"0",F:"+",o:"-",j:"E",D:"\u2030",m:"\u221e",A:"NaN",g:"#,##0.###",G:"#E0",C:"#,##0%",c:"\u00a4#,##0.00",i:"USD"},l={h:".",l:",",B:"%",M:"\u0966",F:"+",o:"-",j:"E",D:"\u2030",m:"\u221e",A:"NaN",g:"#,##,##0.###",G:"[#E0]",C:"#,##0%",c:"\u00a4#,##0.00",i:"INR"};b("I18N_DATETIMESYMBOLS_ERAS",h.S);b("I18N_DATETIMESYMBOLS_ERANAMES",h.R);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.X);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.da);b("I18N_DATETIMESYMBOLS_MONTHS",h.V);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.ca);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.$);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.fa);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ja);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ha);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.ba);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.ga);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.ea);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.aa);b("I18N_DATETIMESYMBOLS_QUARTERS",h.Z);b("I18N_DATETIMESYMBOLS_AMPMS",h.N);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.O);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ia);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.P);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",h.na);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.T);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.la);b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.U);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.I);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.J);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.s);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.u);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.w);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.v);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.H);
b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.f);void 0!==h.L&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.L);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.h);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.B);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.M);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.F);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.o);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.j);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.D);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.m);
b("I18N_NUMBERFORMATSYMBOLS_NAN",l.A);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.g);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.C);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.i);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);
