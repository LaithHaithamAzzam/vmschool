'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1b68af8e1f0f1beaca7f5e8acbd7af6a",
"assets/AssetManifest.bin.json": "dbcc69296cf42aefe9c7f950bd0b4bdd",
"assets/AssetManifest.json": "9a74f75ab9ca0ae5af5cb6d15c42ee96",
"assets/assets/images/avatar1.png": "0ddd26edb7cdbbaffff158a0d88ebfd6",
"assets/assets/images/avatar2.png": "592d2ff7964edb7a486cd7a7c0511823",
"assets/assets/images/avatar3.png": "2c31a807f1e8e3c50c1222ef2be93e3f",
"assets/assets/images/book.jpg": "e45148dfa092b5beea9e138fa23fe9a8",
"assets/assets/images/dark.svg": "a8069f78ab890ec923683c2e5c57d4ed",
"assets/assets/images/divi.svg": "15a699779b897d01bfe1e333c57b34c5",
"assets/assets/images/doctor.png": "8d49230865e8fee3426913ab28ad3fc4",
"assets/assets/images/drive.svg": "2ae5b8f025ce50baab75211874eafa6b",
"assets/assets/images/emp.svg": "2307e08d97102983d20d470df3f0fc34",
"assets/assets/images/facebook-icon.png": "1fda61735d7f9a16f5992a1d93e983c1",
"assets/assets/images/Home-Background.png": "114e8eb9b85aa5f5dd8b0a4c98c68052",
"assets/assets/images/Home-Background2.png": "25489296ad63c48e5604c37ddac11ff4",
"assets/assets/images/Illness.png": "ccc7732349ad93ef874b05671706fdcc",
"assets/assets/images/labrary3d.png": "3ed87358c641140503585f9ba3dfc4aa",
"assets/assets/images/light.svg": "06d16f5a4b4fb1b55107eb9140af6600",
"assets/assets/images/line.svg": "9fee6e943d2f877ee47461b0e60581d0",
"assets/assets/images/linkedin-icon.png": "c85a5371dd71d49f4eb19b9df0b7918a",
"assets/assets/images/Logo.png": "fc8db1e5574251fc791f61f7d69d0fb4",
"assets/assets/images/logo2.png": "d9cb67819dda02aad57961278b342559",
"assets/assets/images/logodark.svg": "0c30890a0955de5bb86e191e86ec8592",
"assets/assets/images/logolight.svg": "6aeb4fedc4007a1caa8a12796d91c666",
"assets/assets/images/meet.svg": "ba7ec83d15e43a7da1ca8c9488948dec",
"assets/assets/images/new.jpg": "46363f28a17642ef974ed935fd7b762d",
"assets/assets/images/nodata.svg": "a624eaee9e30522e19cf93734d512e50",
"assets/assets/images/party.png": "5ed89b86363999749f5835cb5c5b4356",
"assets/assets/images/Rectangle66.png": "8a3ee7fdb9ff8e37c623a4c2a2936ce0",
"assets/assets/images/section2-image1.png": "f5d85aff71f5aff23be72dacd8a9b292",
"assets/assets/images/section3-image1.jpg": "44e782b5862a3687d91dbace7832cd3d",
"assets/assets/images/section4-image1.png": "65e628b7628dd5acb7b0b8f63e734685",
"assets/assets/images/section4-image2.png": "115766999ea0b0d0171bd756e470fe81",
"assets/assets/images/section4-image3.png": "18737c7e46e35befd813ebda4fa47267",
"assets/assets/images/section4-image4.png": "1808475c3a8e709e26130c156a8ed956",
"assets/assets/images/section4-image5.png": "d24febf218dc9c34f70618e850216f3e",
"assets/assets/images/section4-image6.png": "55d227d83426b2c57b859245debf1e9e",
"assets/assets/images/section5-image1.png": "42e6b7f411882081a1c5adee5d82d664",
"assets/assets/images/section5-image2.png": "b6d064fc23e3b5b2c9b14bc9ad6daf64",
"assets/assets/images/section5-image3.png": "92e44a67e2f7c1e9472b0eba7bc22611",
"assets/assets/images/section5-image4.png": "cb026bf523c81f72e8e445b9d13489f5",
"assets/assets/images/section6-image1.jpg": "041112ae8c4d851e92a3d6be0b1b3afd",
"assets/assets/images/stu.svg": "0fde8ab15bc239b5738de7fe51eb3914",
"assets/assets/images/tech.svg": "ca4767de6c3ca41541d7d1af35cdd032",
"assets/assets/images/think.gif": "5d2ea4be21f88fd0264d64800f150303",
"assets/assets/images/time-icon.png": "de8287f290116f917c1b4366056b4a1d",
"assets/assets/images/Vaction.png": "c4784d05edc33a8029868a1d1c627e81",
"assets/assets/images/vist.svg": "254b292a5382def4047ece39decabda7",
"assets/assets/images/warning.gif": "149eec120c820e2e523c999611b3bc57",
"assets/assets/images/warning.svg": "1409e262b4bd45c219157a97f892a91a",
"assets/assets/images/youtube-icon.png": "ada24668ad6a03d6e472130f1e1e82ad",
"assets/FontManifest.json": "bc16e36997546588ec7b647f876ca2c8",
"assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/fonts/Ficons.ttf": "64e1d34d9d20e1a9a64d73ee2c690c0d",
"assets/fonts/MaterialIcons-Regular.otf": "d81183cc8d62108b9b8297b9b564fd30",
"assets/fonts/Sansation_Regular.ttf": "14df84ca92de1925877ef2ea23edf8b0",
"assets/fonts/VMS_Icons.ttf": "8ae5433f923721f8d1e9e9e3e489b76d",
"assets/NOTICES": "3bb5a33d5c3e4866fbcb659708be089f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/fl_country_code_picker/assets/flags/ad.png": "796914c894c19b68adf1a85057378dbc",
"assets/packages/fl_country_code_picker/assets/flags/ae.png": "045eddd7da0ef9fb3a7593d7d2262659",
"assets/packages/fl_country_code_picker/assets/flags/af.png": "44bc280cbce3feb6ad13094636033999",
"assets/packages/fl_country_code_picker/assets/flags/ag.png": "9bae91983418f15d9b8ffda5ba340c4e",
"assets/packages/fl_country_code_picker/assets/flags/ai.png": "cfb0f715fc17e9d7c8662987fbe30867",
"assets/packages/fl_country_code_picker/assets/flags/al.png": "af06d6e1028d16ec472d94e9bf04d593",
"assets/packages/fl_country_code_picker/assets/flags/am.png": "2de892fa2f750d73118b1aafaf857884",
"assets/packages/fl_country_code_picker/assets/flags/an.png": "469f91bffae95b6ad7c299ac800ee19d",
"assets/packages/fl_country_code_picker/assets/flags/ao.png": "d19240c02a02e59c3c1ec0959f877f2e",
"assets/packages/fl_country_code_picker/assets/flags/aq.png": "c57c903b39fe5e2ba1e01bc3d330296c",
"assets/packages/fl_country_code_picker/assets/flags/ar.png": "bd71b7609d743ab9ecfb600e10ac7070",
"assets/packages/fl_country_code_picker/assets/flags/as.png": "830d17d172d2626e13bc6397befa74f3",
"assets/packages/fl_country_code_picker/assets/flags/at.png": "7edbeb0f5facb47054a894a5deb4533c",
"assets/packages/fl_country_code_picker/assets/flags/au.png": "600835121397ea512cea1f3204278329",
"assets/packages/fl_country_code_picker/assets/flags/aw.png": "8966dbf74a9f3fd342b8d08768e134cc",
"assets/packages/fl_country_code_picker/assets/flags/ax.png": "ffffd1de8a677dc02a47eb8f0e98d9ac",
"assets/packages/fl_country_code_picker/assets/flags/az.png": "967d8ee83bfe2f84234525feab9d1d4c",
"assets/packages/fl_country_code_picker/assets/flags/ba.png": "9faf88de03becfcd39b6231e79e51c2e",
"assets/packages/fl_country_code_picker/assets/flags/bb.png": "a5bb4503d41e97c08b2d4a9dd934fa30",
"assets/packages/fl_country_code_picker/assets/flags/bd.png": "5fbfa1a996e6da8ad4c5f09efc904798",
"assets/packages/fl_country_code_picker/assets/flags/be.png": "498270989eaefce71c393075c6e154c8",
"assets/packages/fl_country_code_picker/assets/flags/bf.png": "9b91173a8f8bb52b1eca2e97908f55dd",
"assets/packages/fl_country_code_picker/assets/flags/bg.png": "d591e9fa192837524f57db9ab2020a9e",
"assets/packages/fl_country_code_picker/assets/flags/bh.png": "6e48934b768705ca98a7d1e56422dc83",
"assets/packages/fl_country_code_picker/assets/flags/bi.png": "fb60b979ef7d78391bb32896af8b7021",
"assets/packages/fl_country_code_picker/assets/flags/bj.png": "9b503fbf4131f93fbe7b574b8c74357e",
"assets/packages/fl_country_code_picker/assets/flags/bl.png": "30f55fe505cb4f3ddc09a890d4073ebe",
"assets/packages/fl_country_code_picker/assets/flags/bm.png": "eb2492b804c9028f3822cdb1f83a48e2",
"assets/packages/fl_country_code_picker/assets/flags/bn.png": "94d863533155418d07a607b52ca1b701",
"assets/packages/fl_country_code_picker/assets/flags/bo.png": "92c247480f38f66397df4eb1f8ff0a68",
"assets/packages/fl_country_code_picker/assets/flags/bq.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/fl_country_code_picker/assets/flags/br.png": "8fa9d6f8a64981d554e48f125c59c924",
"assets/packages/fl_country_code_picker/assets/flags/bs.png": "814a9a20dd15d78f555e8029795821f3",
"assets/packages/fl_country_code_picker/assets/flags/bt.png": "3c0fed3f67d5aa1132355ed76d2a14d0",
"assets/packages/fl_country_code_picker/assets/flags/bv.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/fl_country_code_picker/assets/flags/bw.png": "04fa1f47fc150e7e10938a2f497795be",
"assets/packages/fl_country_code_picker/assets/flags/by.png": "03f5334e6ab8a537d0fc03d76a4e0c8a",
"assets/packages/fl_country_code_picker/assets/flags/bz.png": "e95df47896e2a25df726c1dccf8af9ab",
"assets/packages/fl_country_code_picker/assets/flags/ca.png": "bc87852952310960507a2d2e590c92bf",
"assets/packages/fl_country_code_picker/assets/flags/cc.png": "126eedd79580be7279fec9bb78add64d",
"assets/packages/fl_country_code_picker/assets/flags/cd.png": "072243e38f84b5d2a7c39092fa883dda",
"assets/packages/fl_country_code_picker/assets/flags/cf.png": "625ad124ba8147122ee198ae5b9f061e",
"assets/packages/fl_country_code_picker/assets/flags/cg.png": "7ea7b458a77558527c030a5580b06779",
"assets/packages/fl_country_code_picker/assets/flags/ch.png": "8d7a211fd742d4dea9d1124672b88cda",
"assets/packages/fl_country_code_picker/assets/flags/ci.png": "0f94edf22f735b4455ac7597efb47ca5",
"assets/packages/fl_country_code_picker/assets/flags/ck.png": "35c6c878d96485422e28461bb46e7d9f",
"assets/packages/fl_country_code_picker/assets/flags/cl.png": "658cdc5c9fd73213495f1800ce1e2b78",
"assets/packages/fl_country_code_picker/assets/flags/cm.png": "89f02c01702cb245938f3d62db24f75d",
"assets/packages/fl_country_code_picker/assets/flags/cn.png": "6b8c353044ef5e29631279e0afc1a8c3",
"assets/packages/fl_country_code_picker/assets/flags/co.png": "e2fa18bb920565594a0e62427540163c",
"assets/packages/fl_country_code_picker/assets/flags/cr.png": "475b2d72352df176b722da898490afa2",
"assets/packages/fl_country_code_picker/assets/flags/cu.png": "8d4a05799ef3d6bbe07b241dd4398114",
"assets/packages/fl_country_code_picker/assets/flags/cv.png": "60d75c9d0e0cd186bb1b70375c797a0c",
"assets/packages/fl_country_code_picker/assets/flags/cw.png": "db36ed08bfafe9c5d0d02332597676ca",
"assets/packages/fl_country_code_picker/assets/flags/cx.png": "65421207e2eb319ba84617290bf24082",
"assets/packages/fl_country_code_picker/assets/flags/cy.png": "9a3518f15815fa1705f1d7ca18907748",
"assets/packages/fl_country_code_picker/assets/flags/cz.png": "482c8ba16ff3d81eeef60650db3802e4",
"assets/packages/fl_country_code_picker/assets/flags/de.png": "6f94b174f4a02f3292a521d992ed5193",
"assets/packages/fl_country_code_picker/assets/flags/dj.png": "dc144d9502e4edb3e392d67965f7583e",
"assets/packages/fl_country_code_picker/assets/flags/dk.png": "f9d6bcded318f5910b8bc49962730afa",
"assets/packages/fl_country_code_picker/assets/flags/dm.png": "b7ab53eeee4303e193ea1603f33b9c54",
"assets/packages/fl_country_code_picker/assets/flags/do.png": "a05514a849c002b2a30f420070eb0bbb",
"assets/packages/fl_country_code_picker/assets/flags/dz.png": "93afdc9291f99de3dd88b29be3873a20",
"assets/packages/fl_country_code_picker/assets/flags/ec.png": "cbaf1d60bbcde904a669030e1c883f3e",
"assets/packages/fl_country_code_picker/assets/flags/ee.png": "54aa1816507276a17070f395a4a89e2e",
"assets/packages/fl_country_code_picker/assets/flags/eg.png": "9e371179452499f2ba7b3c5ff47bec69",
"assets/packages/fl_country_code_picker/assets/flags/eh.png": "f781a34a88fa0adf175e3aad358575ed",
"assets/packages/fl_country_code_picker/assets/flags/er.png": "08a95adef16cb9174f183f8d7ac1102b",
"assets/packages/fl_country_code_picker/assets/flags/es.png": "e180e29212048d64951449cc80631440",
"assets/packages/fl_country_code_picker/assets/flags/et.png": "2c5eec0cda6655b5228fe0e9db763a8e",
"assets/packages/fl_country_code_picker/assets/flags/eu.png": "b32e3d089331f019b61399a1df5a763a",
"assets/packages/fl_country_code_picker/assets/flags/fi.png": "a79f2dbc126dac46e4396fcc80942a82",
"assets/packages/fl_country_code_picker/assets/flags/fj.png": "6030dc579525663142e3e8e04db80154",
"assets/packages/fl_country_code_picker/assets/flags/fk.png": "0e9d14f59e2e858cd0e89bdaec88c2c6",
"assets/packages/fl_country_code_picker/assets/flags/fm.png": "d4dffd237271ddd37f3bbde780a263bb",
"assets/packages/fl_country_code_picker/assets/flags/fo.png": "0bfc387f2eb3d9b85225d61b515ee8fc",
"assets/packages/fl_country_code_picker/assets/flags/fr.png": "79cbece941f09f9a9a46d42cabd523b1",
"assets/packages/fl_country_code_picker/assets/flags/ga.png": "fa05207326e695b552e0a885164ee5ac",
"assets/packages/fl_country_code_picker/assets/flags/gb-eng.png": "0b05e615c5a3feee707a4d72009cd767",
"assets/packages/fl_country_code_picker/assets/flags/gb-nir.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/fl_country_code_picker/assets/flags/gb-sct.png": "075bb357733327ec4115ab5cbba792ac",
"assets/packages/fl_country_code_picker/assets/flags/gb-wls.png": "72005cb7be41ac749368a50a9d9f29ee",
"assets/packages/fl_country_code_picker/assets/flags/gb.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/fl_country_code_picker/assets/flags/gd.png": "42ad178232488665870457dd53e2b037",
"assets/packages/fl_country_code_picker/assets/flags/ge.png": "93d6c82e9dc8440b706589d086be2c1c",
"assets/packages/fl_country_code_picker/assets/flags/gf.png": "71678ea3b4a8eeabd1e64a60eece4256",
"assets/packages/fl_country_code_picker/assets/flags/gg.png": "cdb11f97802d458cfa686f33459f0d4b",
"assets/packages/fl_country_code_picker/assets/flags/gh.png": "c73432df8a63fb674f93e8424eae545f",
"assets/packages/fl_country_code_picker/assets/flags/gi.png": "58894db0e25e9214ec2271d96d4d1623",
"assets/packages/fl_country_code_picker/assets/flags/gl.png": "d09f355715f608263cf0ceecd3c910ed",
"assets/packages/fl_country_code_picker/assets/flags/gm.png": "c670404188a37f5d347d03947f02e4d7",
"assets/packages/fl_country_code_picker/assets/flags/gn.png": "765a0434cb071ad4090a8ea06797a699",
"assets/packages/fl_country_code_picker/assets/flags/gp.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/fl_country_code_picker/assets/flags/gq.png": "0dc3ca0cda7dfca81244e1571a4c466c",
"assets/packages/fl_country_code_picker/assets/flags/gr.png": "86aeb970a79aa561187fa8162aee2938",
"assets/packages/fl_country_code_picker/assets/flags/gs.png": "524d0f00ee874af0cdf3c00f49fa17ae",
"assets/packages/fl_country_code_picker/assets/flags/gt.png": "df7a020c2f611bdcb3fa8cd2f581b12f",
"assets/packages/fl_country_code_picker/assets/flags/gu.png": "babddec7750bad459ca1289d7ac7fc6a",
"assets/packages/fl_country_code_picker/assets/flags/gw.png": "25bc1b5542dadf2992b025695baf056c",
"assets/packages/fl_country_code_picker/assets/flags/gy.png": "75f8dd61ddedb3cf595075e64fc80432",
"assets/packages/fl_country_code_picker/assets/flags/hk.png": "51df04cf3db3aefd1778761c25a697dd",
"assets/packages/fl_country_code_picker/assets/flags/hm.png": "600835121397ea512cea1f3204278329",
"assets/packages/fl_country_code_picker/assets/flags/hn.png": "09ca9da67a9c84f4fc25f96746162f3c",
"assets/packages/fl_country_code_picker/assets/flags/hr.png": "04cfd167b9564faae3b2dd3ef13a0794",
"assets/packages/fl_country_code_picker/assets/flags/ht.png": "009d5c3627c89310bd25522b636b09bf",
"assets/packages/fl_country_code_picker/assets/flags/hu.png": "66c22db579470694c7928598f6643cc6",
"assets/packages/fl_country_code_picker/assets/flags/id.png": "78d94c7d31fed988e9b92279895d8b05",
"assets/packages/fl_country_code_picker/assets/flags/ie.png": "5790c74e53070646cd8a06eec43e25d6",
"assets/packages/fl_country_code_picker/assets/flags/il.png": "b72b572cc199bf03eba1c008cd00d3cb",
"assets/packages/fl_country_code_picker/assets/flags/im.png": "17ddc1376b22998731ccc5295ba9db1c",
"assets/packages/fl_country_code_picker/assets/flags/in.png": "be8bf440db707c1cc2ff9dd0328414e5",
"assets/packages/fl_country_code_picker/assets/flags/io.png": "8021829259b5030e95f45902d30f137c",
"assets/packages/fl_country_code_picker/assets/flags/iq.png": "dc9f3e8ab93b20c33f4a4852c162dc1e",
"assets/packages/fl_country_code_picker/assets/flags/ir.png": "df9b6d2134d1c5d4d3e676d9857eb675",
"assets/packages/fl_country_code_picker/assets/flags/is.png": "22358dadd1d5fc4f11fcb3c41d453ec0",
"assets/packages/fl_country_code_picker/assets/flags/it.png": "99f67d3c919c7338627d922f552c8794",
"assets/packages/fl_country_code_picker/assets/flags/je.png": "8d6482f71bd0728025134398fc7c6e58",
"assets/packages/fl_country_code_picker/assets/flags/jm.png": "3537217c5eeb048198415d398e0fa19e",
"assets/packages/fl_country_code_picker/assets/flags/jo.png": "d5bfa96801b7ed670ad1be55a7bd94ed",
"assets/packages/fl_country_code_picker/assets/flags/jp.png": "b7a724413be9c2b001112c665d764385",
"assets/packages/fl_country_code_picker/assets/flags/ke.png": "034164976de81ef96f47cfc6f708dde6",
"assets/packages/fl_country_code_picker/assets/flags/kg.png": "a9b6a1b8fe03b8b617f30a28a1d61c12",
"assets/packages/fl_country_code_picker/assets/flags/kh.png": "cd50a67c3b8058585b19a915e3635107",
"assets/packages/fl_country_code_picker/assets/flags/ki.png": "69a7d5a8f6f622e6d2243f3f04d1d4c0",
"assets/packages/fl_country_code_picker/assets/flags/km.png": "204a44c4c89449415168f8f77c4c0d31",
"assets/packages/fl_country_code_picker/assets/flags/kn.png": "65d2fc69949162f1bc14eb9f2da5ecbc",
"assets/packages/fl_country_code_picker/assets/flags/kp.png": "fd6e44b3fe460988afbfd0cb456282b2",
"assets/packages/fl_country_code_picker/assets/flags/kr.png": "9e2a9c7ae07cf8977e8f01200ee2912e",
"assets/packages/fl_country_code_picker/assets/flags/kw.png": "b2afbb748e0b7c0b0c22f53e11e7dd55",
"assets/packages/fl_country_code_picker/assets/flags/ky.png": "666d01aa03ecdf6b96202cdf6b08b732",
"assets/packages/fl_country_code_picker/assets/flags/kz.png": "cfce5cd7842ef8091b7c25b23c3bb069",
"assets/packages/fl_country_code_picker/assets/flags/la.png": "8c88d02c3824eea33af66723d41bb144",
"assets/packages/fl_country_code_picker/assets/flags/lb.png": "b21c8d6f5dd33761983c073f217a0c4f",
"assets/packages/fl_country_code_picker/assets/flags/lc.png": "055c35de209c63b67707c5297ac5079a",
"assets/packages/fl_country_code_picker/assets/flags/li.png": "3cf7e27712e36f277ca79120c447e5d1",
"assets/packages/fl_country_code_picker/assets/flags/lk.png": "56412c68b1d952486f2da6c1318adaf2",
"assets/packages/fl_country_code_picker/assets/flags/lr.png": "1c159507670497f25537ad6f6d64f88d",
"assets/packages/fl_country_code_picker/assets/flags/ls.png": "f2d4025bf560580ab141810a83249df0",
"assets/packages/fl_country_code_picker/assets/flags/lt.png": "e38382f3f7cb60cdccbf381cea594d2d",
"assets/packages/fl_country_code_picker/assets/flags/lu.png": "4cc30d7a4c3c3b98f55824487137680d",
"assets/packages/fl_country_code_picker/assets/flags/lv.png": "6a86b0357df4c815f1dc21e0628aeb5f",
"assets/packages/fl_country_code_picker/assets/flags/ly.png": "777f861e476f1426bf6663fa283243e5",
"assets/packages/fl_country_code_picker/assets/flags/ma.png": "dd5dc19e011755a7610c1e7ccd8abdae",
"assets/packages/fl_country_code_picker/assets/flags/mc.png": "412ce0b1f821e3912e83ae356b30052e",
"assets/packages/fl_country_code_picker/assets/flags/md.png": "7b273f5526b88ed0d632fd0fd8be63be",
"assets/packages/fl_country_code_picker/assets/flags/me.png": "74434a1447106cc4fb7556c76349c3da",
"assets/packages/fl_country_code_picker/assets/flags/mf.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/fl_country_code_picker/assets/flags/mg.png": "a562a819338427e57c57744bb92b1ef1",
"assets/packages/fl_country_code_picker/assets/flags/mh.png": "2a7c77b8b1b4242c6aa8539babe127a7",
"assets/packages/fl_country_code_picker/assets/flags/mk.png": "8b17ec36efa149749b8d3fd59f55974b",
"assets/packages/fl_country_code_picker/assets/flags/ml.png": "1a3a39e5c9f2fdccfb6189a117d04f72",
"assets/packages/fl_country_code_picker/assets/flags/mm.png": "b664dc1c591c3bf34ad4fd223922a439",
"assets/packages/fl_country_code_picker/assets/flags/mn.png": "02af8519f83d06a69068c4c0f6463c8a",
"assets/packages/fl_country_code_picker/assets/flags/mo.png": "da3700f98c1fe1739505297d1efb9e12",
"assets/packages/fl_country_code_picker/assets/flags/mp.png": "60b14b06d1ce23761767b73d54ef613a",
"assets/packages/fl_country_code_picker/assets/flags/mq.png": "446edd9300307eda562e5c9ac307d7f2",
"assets/packages/fl_country_code_picker/assets/flags/mr.png": "733d747ba4ec8cf120d5ebc0852de34a",
"assets/packages/fl_country_code_picker/assets/flags/ms.png": "32daa6ee99335b73cb3c7519cfd14a61",
"assets/packages/fl_country_code_picker/assets/flags/mt.png": "808538b29f6b248469a184bbf787a97f",
"assets/packages/fl_country_code_picker/assets/flags/mu.png": "aec293ef26a9df356ea2f034927b0a74",
"assets/packages/fl_country_code_picker/assets/flags/mv.png": "69843b1ad17352372e70588b9c37c7cc",
"assets/packages/fl_country_code_picker/assets/flags/mw.png": "efc0c58b76be4bf1c3efda589b838132",
"assets/packages/fl_country_code_picker/assets/flags/mx.png": "b69db8e7f14b18ddd0e3769f28137552",
"assets/packages/fl_country_code_picker/assets/flags/my.png": "7b4bc8cdef4f7b237791c01f5e7874f4",
"assets/packages/fl_country_code_picker/assets/flags/mz.png": "40a78c6fa368aed11b3d483cdd6973a5",
"assets/packages/fl_country_code_picker/assets/flags/na.png": "3499146c4205c019196f8a0f7a7aa156",
"assets/packages/fl_country_code_picker/assets/flags/nc.png": "a3ee8fc05db66f7ce64bce533441da7f",
"assets/packages/fl_country_code_picker/assets/flags/ne.png": "a152defcfb049fa960c29098c08e3cd3",
"assets/packages/fl_country_code_picker/assets/flags/nf.png": "9a4a607db5bc122ff071cbfe58040cf7",
"assets/packages/fl_country_code_picker/assets/flags/ng.png": "15b7ad41c03c87b9f30c19d37f457817",
"assets/packages/fl_country_code_picker/assets/flags/ni.png": "6985ed1381cb33a5390258795f72e95a",
"assets/packages/fl_country_code_picker/assets/flags/nl.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/fl_country_code_picker/assets/flags/no.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/fl_country_code_picker/assets/flags/np.png": "35e3d64e59650e1f1cf909f5c6d85176",
"assets/packages/fl_country_code_picker/assets/flags/nr.png": "f5ae3c51dfacfd6719202b4b24e20131",
"assets/packages/fl_country_code_picker/assets/flags/nu.png": "c8bb4da14b8ffb703036b1bae542616d",
"assets/packages/fl_country_code_picker/assets/flags/nz.png": "b48a5e047a5868e59c2abcbd8387082d",
"assets/packages/fl_country_code_picker/assets/flags/om.png": "79a867771bd9447d372d5df5ec966b36",
"assets/packages/fl_country_code_picker/assets/flags/pa.png": "49d53d64564555ea5976c20ea9365ea6",
"assets/packages/fl_country_code_picker/assets/flags/pe.png": "724d3525f205dfc8705bb6e66dd5bdff",
"assets/packages/fl_country_code_picker/assets/flags/pf.png": "3ba7f48f96a7189f9511a7f77ea0a7a4",
"assets/packages/fl_country_code_picker/assets/flags/pg.png": "06961c2b216061b0e40cb4221abc2bff",
"assets/packages/fl_country_code_picker/assets/flags/ph.png": "de75e3931c41ae8b9cae8823a9500ca7",
"assets/packages/fl_country_code_picker/assets/flags/pk.png": "0228ceefa355b34e8ec3be8bfd1ddb42",
"assets/packages/fl_country_code_picker/assets/flags/pl.png": "a7b46e3dcd5571d40c3fa8b62b1f334a",
"assets/packages/fl_country_code_picker/assets/flags/pm.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/fl_country_code_picker/assets/flags/pn.png": "ffa91e8a1df1eac6b36d737aa76d701b",
"assets/packages/fl_country_code_picker/assets/flags/pr.png": "ac1c4bcef3da2034e1668ab1e95ae82d",
"assets/packages/fl_country_code_picker/assets/flags/ps.png": "b6e1bd808cf8e5e3cd2b23e9cf98d12e",
"assets/packages/fl_country_code_picker/assets/flags/pt.png": "b4cf39fbafb4930dec94f416e71fc232",
"assets/packages/fl_country_code_picker/assets/flags/pw.png": "92ec1edf965de757bc3cca816f4cebbd",
"assets/packages/fl_country_code_picker/assets/flags/py.png": "6bb880f2dd24622093ac59d4959ae70d",
"assets/packages/fl_country_code_picker/assets/flags/qa.png": "b95e814a13e5960e28042347cec5bc0d",
"assets/packages/fl_country_code_picker/assets/flags/re.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/fl_country_code_picker/assets/flags/ro.png": "1ee3ca39dbe79f78d7fa903e65161fdb",
"assets/packages/fl_country_code_picker/assets/flags/rs.png": "ee9ae3b80531d6d0352a39a56c5130c0",
"assets/packages/fl_country_code_picker/assets/flags/ru.png": "9a3b50fcf2f7ae2c33aa48b91ab6cd85",
"assets/packages/fl_country_code_picker/assets/flags/rw.png": "6ef05d29d0cded56482b1ad17f49e186",
"assets/packages/fl_country_code_picker/assets/flags/sa.png": "ef836bd02f745af03aa0d01003942d44",
"assets/packages/fl_country_code_picker/assets/flags/sb.png": "e3a6704b7ba2621480d7074a6e359b03",
"assets/packages/fl_country_code_picker/assets/flags/sc.png": "52f9bd111531041468c89ce9da951026",
"assets/packages/fl_country_code_picker/assets/flags/sd.png": "93e252f26bead630c0a0870de5a88f14",
"assets/packages/fl_country_code_picker/assets/flags/se.png": "24d2bed25b5aad316134039c2903ac59",
"assets/packages/fl_country_code_picker/assets/flags/sg.png": "94ea82acf1aa0ea96f58c6b0cd1ed452",
"assets/packages/fl_country_code_picker/assets/flags/sh.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/fl_country_code_picker/assets/flags/si.png": "922d047a95387277f84fdc246f0a8d11",
"assets/packages/fl_country_code_picker/assets/flags/sj.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/fl_country_code_picker/assets/flags/sk.png": "0f8da623c8f140ac2b5a61234dd3e7cd",
"assets/packages/fl_country_code_picker/assets/flags/sl.png": "a7785c2c81149afab11a5fa86ee0edae",
"assets/packages/fl_country_code_picker/assets/flags/sm.png": "b41d5b7eb3679c2e477fbd25f5ee9e7d",
"assets/packages/fl_country_code_picker/assets/flags/sn.png": "25201e1833a1b642c66c52a09b43f71e",
"assets/packages/fl_country_code_picker/assets/flags/so.png": "cfe6bb95bcd259a3cc41a09ee7ca568b",
"assets/packages/fl_country_code_picker/assets/flags/sr.png": "e5719b1a8ded4e5230f6bac3efc74a90",
"assets/packages/fl_country_code_picker/assets/flags/ss.png": "f1c99aded110fc8a0bc85cd6c63895fb",
"assets/packages/fl_country_code_picker/assets/flags/st.png": "7a28a4f0333bf4fb4f34b68e65c04637",
"assets/packages/fl_country_code_picker/assets/flags/sv.png": "994c8315ced2a4d8c728010447371ea1",
"assets/packages/fl_country_code_picker/assets/flags/sx.png": "8fce7986b531ff8936540ad1155a5df5",
"assets/packages/fl_country_code_picker/assets/flags/sy.png": "2e33ad23bffc935e4a06128bc5519a2b",
"assets/packages/fl_country_code_picker/assets/flags/sz.png": "5e45a755ac4b33df811f0fb76585270e",
"assets/packages/fl_country_code_picker/assets/flags/tc.png": "6f2d1a2b9f887be4b3568169e297a506",
"assets/packages/fl_country_code_picker/assets/flags/td.png": "51b129223db46adc71f9df00c93c2868",
"assets/packages/fl_country_code_picker/assets/flags/tf.png": "dc3f8c0d9127aa82cbd45b8861a67bf5",
"assets/packages/fl_country_code_picker/assets/flags/tg.png": "82dabd3a1a4900ae4866a4da65f373e5",
"assets/packages/fl_country_code_picker/assets/flags/th.png": "d4bd67d33ed4ac74b4e9b75d853dae02",
"assets/packages/fl_country_code_picker/assets/flags/tj.png": "2407ba3e581ffd6c2c6b28e9692f9e39",
"assets/packages/fl_country_code_picker/assets/flags/tk.png": "87e390b384b39af41afd489e42b03e07",
"assets/packages/fl_country_code_picker/assets/flags/tl.png": "b3475faa9840f875e5ec38b0e6a6c170",
"assets/packages/fl_country_code_picker/assets/flags/tm.png": "3fe5e44793aad4e8997c175bc72fda06",
"assets/packages/fl_country_code_picker/assets/flags/tn.png": "87f591537e0a5f01bb10fe941798d4e4",
"assets/packages/fl_country_code_picker/assets/flags/to.png": "a93fdd2ace7777e70528936a135f1610",
"assets/packages/fl_country_code_picker/assets/flags/tr.png": "0100620dedad6034185d0d53f80287bd",
"assets/packages/fl_country_code_picker/assets/flags/tt.png": "716fa6f4728a25ffccaf3770f5f05f7b",
"assets/packages/fl_country_code_picker/assets/flags/tv.png": "493c543f07de75f222d8a76506c57989",
"assets/packages/fl_country_code_picker/assets/flags/tw.png": "94322a94d308c89d1bc7146e05f1d3e5",
"assets/packages/fl_country_code_picker/assets/flags/tz.png": "389451347d28584d88b199f0cbe0116b",
"assets/packages/fl_country_code_picker/assets/flags/ua.png": "dbd97cfa852ffc84bfdf98bc2a2c3789",
"assets/packages/fl_country_code_picker/assets/flags/ug.png": "6ae26af3162e5e3408cb5c5e1c968047",
"assets/packages/fl_country_code_picker/assets/flags/um.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/fl_country_code_picker/assets/flags/us.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/fl_country_code_picker/assets/flags/uy.png": "20c63ac48df3e394fa242d430276a988",
"assets/packages/fl_country_code_picker/assets/flags/uz.png": "d3713ea19c37aaf94975c3354edd7bb7",
"assets/packages/fl_country_code_picker/assets/flags/va.png": "cfbf48f8fcaded75f186d10e9d1408fd",
"assets/packages/fl_country_code_picker/assets/flags/vc.png": "a604d5acd8c7be6a2bbaa1759ac2949d",
"assets/packages/fl_country_code_picker/assets/flags/ve.png": "f5dabf05e3a70b4eeffa5dad32d10a67",
"assets/packages/fl_country_code_picker/assets/flags/vg.png": "0f19ce4f3c92b0917902cb316be492ba",
"assets/packages/fl_country_code_picker/assets/flags/vi.png": "944281795d5daf17a273f394e51b8b79",
"assets/packages/fl_country_code_picker/assets/flags/vn.png": "7c8f8457485f14482dcab4042e432e87",
"assets/packages/fl_country_code_picker/assets/flags/vu.png": "1bed31828f3b7e0ff260f61ab45396ad",
"assets/packages/fl_country_code_picker/assets/flags/wf.png": "4d33c71f87a33e47a0e466191c4eb3db",
"assets/packages/fl_country_code_picker/assets/flags/ws.png": "8cef2c9761d3c8107145d038bf1417ea",
"assets/packages/fl_country_code_picker/assets/flags/xk.png": "b75ba9ad218b109fca4ef1f3030936f1",
"assets/packages/fl_country_code_picker/assets/flags/ye.png": "1d5dcbcbbc8de944c3db228f0c089569",
"assets/packages/fl_country_code_picker/assets/flags/yt.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/fl_country_code_picker/assets/flags/za.png": "aa749828e6cf1a3393e0d5c9ab088af0",
"assets/packages/fl_country_code_picker/assets/flags/zm.png": "29b67848f5e3864213c84ccf108108ea",
"assets/packages/fl_country_code_picker/assets/flags/zw.png": "d5c4fe9318ebc1a68e3445617215195f",
"assets/packages/fl_country_code_picker/i18n/af.json": "56c2bccb2affb253d9f275496b594453",
"assets/packages/fl_country_code_picker/i18n/am.json": "d32ed11596bd0714c9fce1f1bfc3f16e",
"assets/packages/fl_country_code_picker/i18n/ar.json": "fcc06d7c93de78066b89f0030cdc5fe3",
"assets/packages/fl_country_code_picker/i18n/az.json": "430fd5cb15ab8126b9870261225c4032",
"assets/packages/fl_country_code_picker/i18n/be.json": "b3ded71bde8fbbdac0bf9c53b3f66fff",
"assets/packages/fl_country_code_picker/i18n/bg.json": "fc2f396a23bf35047919002a68cc544c",
"assets/packages/fl_country_code_picker/i18n/bn.json": "1d49af56e39dea0cf602c0c22046d24c",
"assets/packages/fl_country_code_picker/i18n/bs.json": "8fa362bc16f28b5ca0e05e82536d9bd9",
"assets/packages/fl_country_code_picker/i18n/ca.json": "cdf37aa8bb59b485e9b566bff8523059",
"assets/packages/fl_country_code_picker/i18n/cs.json": "7cb74ecb8d6696ba6f333ae1cfae59eb",
"assets/packages/fl_country_code_picker/i18n/da.json": "bb4a77f6bfaf82e4ed0b57ec41e289aa",
"assets/packages/fl_country_code_picker/i18n/de.json": "96ec6cc7d3df5ce56ee649af7c634dd8",
"assets/packages/fl_country_code_picker/i18n/el.json": "e4da1a5d8ab9c6418036307d54a9aa16",
"assets/packages/fl_country_code_picker/i18n/en.json": "5f86aa7534c8cf8c415e002e290d113c",
"assets/packages/fl_country_code_picker/i18n/es.json": "d71050e3a5c8818c53c294f362548444",
"assets/packages/fl_country_code_picker/i18n/et.json": "a5d4f54704d2cdabb368760399d3cae5",
"assets/packages/fl_country_code_picker/i18n/fa.json": "baefec44af8cd45714204adbc6be15cb",
"assets/packages/fl_country_code_picker/i18n/fi.json": "3ad6c7d3efbb4b1041d087a0ef4a70b9",
"assets/packages/fl_country_code_picker/i18n/fr.json": "b9be4d0a12f9d7c3b8fcf6ce41facd0b",
"assets/packages/fl_country_code_picker/i18n/gl.json": "14e84ea53fe4e3cef19ee3ad2dff3967",
"assets/packages/fl_country_code_picker/i18n/ha.json": "4d0c8114bf4e4fd1e68d71ff3af6528f",
"assets/packages/fl_country_code_picker/i18n/he.json": "6f7a03d60b73a8c5f574188370859d12",
"assets/packages/fl_country_code_picker/i18n/hi.json": "3dac80dc00dc7c73c498a1de439840b4",
"assets/packages/fl_country_code_picker/i18n/hr.json": "e7a48f3455a0d27c0fa55fa9cbf02095",
"assets/packages/fl_country_code_picker/i18n/hu.json": "3cd9c2280221102780d44b3565db7784",
"assets/packages/fl_country_code_picker/i18n/hy.json": "1e2f6d1808d039d7db0e7e335f1a7c77",
"assets/packages/fl_country_code_picker/i18n/id.json": "e472d1d00471f86800572e85c3f3d447",
"assets/packages/fl_country_code_picker/i18n/is.json": "6cf088d727cd0db23f935be9f20456bb",
"assets/packages/fl_country_code_picker/i18n/it.json": "c1f0d5c4e81605566fcb7f399d800768",
"assets/packages/fl_country_code_picker/i18n/ja.json": "cdac0497965957df99334e3996548785",
"assets/packages/fl_country_code_picker/i18n/ka.json": "23c8b2028efe71dab58f3cee32eada43",
"assets/packages/fl_country_code_picker/i18n/kk.json": "bca3f77a658313bbe950fbc9be504fac",
"assets/packages/fl_country_code_picker/i18n/km.json": "2d08c891640307af49d90a793e6bf555",
"assets/packages/fl_country_code_picker/i18n/ko.json": "76484ad0eb25412d4c9be010bca5baf0",
"assets/packages/fl_country_code_picker/i18n/ku.json": "4c743e7dd3d124cb83602d20205d887c",
"assets/packages/fl_country_code_picker/i18n/ky.json": "51dff3d9ff6de3775bc0ffeefe6d36cb",
"assets/packages/fl_country_code_picker/i18n/lt.json": "21cacbfa0a4988d180feb3f6a2326660",
"assets/packages/fl_country_code_picker/i18n/lv.json": "1c83c9664e00dce79faeeec714729a26",
"assets/packages/fl_country_code_picker/i18n/mk.json": "899e90341af48b31ffc8454325b454b2",
"assets/packages/fl_country_code_picker/i18n/ml.json": "096da4f99b9bd77d3fe81dfdc52f279f",
"assets/packages/fl_country_code_picker/i18n/mn.json": "6f69ca7a6a08753da82cb8437f39e9a9",
"assets/packages/fl_country_code_picker/i18n/ms.json": "826babac24d0d842981eb4d5b2249ad6",
"assets/packages/fl_country_code_picker/i18n/my.json": "15cbbf077f3fce5cf4c1c17b1de1a937",
"assets/packages/fl_country_code_picker/i18n/nb.json": "c0f89428782cd8f5ab172621a00be3d0",
"assets/packages/fl_country_code_picker/i18n/nl.json": "50ca28e604fd1d3c3cc683778e9df077",
"assets/packages/fl_country_code_picker/i18n/nn.json": "129e66510d6bcb8b24b2974719e9f395",
"assets/packages/fl_country_code_picker/i18n/no.json": "7a5ef724172bd1d2515ac5d7b0a87366",
"assets/packages/fl_country_code_picker/i18n/pl.json": "78cbb04b3c9e7d27b846ee6a5a82a77b",
"assets/packages/fl_country_code_picker/i18n/ps.json": "ab8348fd97d6ceddc4a509e330433caa",
"assets/packages/fl_country_code_picker/i18n/pt.json": "fc30015b77082fa7ab58c2e43bfc2114",
"assets/packages/fl_country_code_picker/i18n/ro.json": "c38a38f06203156fbd31de4daa4f710a",
"assets/packages/fl_country_code_picker/i18n/ru.json": "aaf6b2672ef507944e74296ea719f3b2",
"assets/packages/fl_country_code_picker/i18n/sd.json": "281e13e4ec4df824094e1e64f2d185a7",
"assets/packages/fl_country_code_picker/i18n/sk.json": "3c52ed27adaaf54602fba85158686d5a",
"assets/packages/fl_country_code_picker/i18n/sl.json": "4a88461ce43941d4a52594a65414e98f",
"assets/packages/fl_country_code_picker/i18n/so.json": "09e1f045e22b85a7f54dd2edc446b0e8",
"assets/packages/fl_country_code_picker/i18n/sq.json": "0aa6432ab040153355d88895aa48a72f",
"assets/packages/fl_country_code_picker/i18n/sr.json": "69a10a0b63edb61e01bc1ba7ba6822e4",
"assets/packages/fl_country_code_picker/i18n/sv.json": "7a6a6a8a91ca86bb0b9e7f276d505896",
"assets/packages/fl_country_code_picker/i18n/ta.json": "48b6617bde902cf72e0ff1731fadfd07",
"assets/packages/fl_country_code_picker/i18n/tg.json": "5512d16cb77eb6ba335c60b16a22578b",
"assets/packages/fl_country_code_picker/i18n/th.json": "721b2e8e586eb7c7da63a18b5aa3a810",
"assets/packages/fl_country_code_picker/i18n/tr.json": "d682217c3ccdd9cc270596fe1af7a182",
"assets/packages/fl_country_code_picker/i18n/tt.json": "e3687dceb189c2f6600137308a11b22f",
"assets/packages/fl_country_code_picker/i18n/ug.json": "e2be27143deb176fa325ab9b229d8fd8",
"assets/packages/fl_country_code_picker/i18n/uk.json": "a7069f447eb0060aa387a649e062c895",
"assets/packages/fl_country_code_picker/i18n/ur.json": "b5bc6921e006ae9292ed09e0eb902716",
"assets/packages/fl_country_code_picker/i18n/uz.json": "00e22e3eb3a7198f0218780f2b04369c",
"assets/packages/fl_country_code_picker/i18n/vi.json": "7ff8a1107080c3dae0762efaa6ff5110",
"assets/packages/fl_country_code_picker/i18n/zh.json": "44a9040959b2049350bbff0696b84d45",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "3929b0838b3b7db761b83c8d5d012e31",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e6aa2030618b746f57dd762607564f6",
"/": "5e6aa2030618b746f57dd762607564f6",
"main.dart.js": "c1f4d2a8787748c93931350c605082cf",
"manifest.json": "509d86e7fbaa3ebacbce83d09c06ad36",
"version.json": "5ab08b65f6c027a6e06d732f25dcdf01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
