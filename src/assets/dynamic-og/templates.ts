import { breakText } from '@assets/dynamic-og/utils';

export function createBlogTemplate(
	postTitle: string,
	postExcerpt: string,
	postDate: string
): string {
	const titleLines = breakText(postTitle, 2, 30);
	const excerptsLines = breakText(postExcerpt, 2, 35);
	return defineBlogTemplate(titleLines, excerptsLines, postDate);
}

// TODO: refactor
export function createDefaultTemplate(title: string, description?: string): string {
	const titleLines = breakText(title, 2, 20);
	if (description) {
		const descLines = breakText(description, 2, 30);
		return defaultTemplate(titleLines, descLines);
	}
	return defaultTemplate(titleLines);
}

function defineBlogTemplate(postTitle: string[], postExcerpt: string[], postDate: string): string {
	return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
@font-face {
    font-family: 'SFPro';
    src:local('SFPro'), url('/SF-Pro.ttf') format('truetype');
    font-display: swap;
}
  </style>
    <g id="Open Graph Image: Blog" clip-path="url(#clip0_992_2255)">
    <rect width="1200" height="630" fill="white"/>
    <path id="background" d="M-73.9219 -3.67224H2177.08V636.328H-73.9219V-3.67224Z" fill="#050505"/>
    <path id="lines" fill-rule="evenodd" clip-rule="evenodd" d="M-71.9219 105.328V210.328H33.0781V105.328H-71.9219ZM-73.9219 210.328V636.328H-71.9219V532.328H33.0781V636.328H35.0781V532.328H140.078V636.328H142.078V532.328H247.078V636.328H249.078V532.328H354.078V636.328H355.078V532.328H460.078V636.328H462.078V532.328H567.078V636.328H569.078V532.328H674.078V636.328H676.078V532.328H781.078V636.328H783.078V532.328H888.078V636.328H890.078V532.328H995.078V636.328H997.078V532.328H1102.08V636.328H1104.08V532.328H1209.08V636.328H1211.08V532.328H1315.08V636.328H1317.08V532.328H1422.08V636.328H1424.08V532.328H1529.08V636.328H1531.08V532.328H1636.08V636.328H1638.08V532.328H1743.08V636.328H1745.08V532.328H1850.08V636.328H1852.08V532.328H1957.08V636.328H1959.08V532.328H2064.08V636.328H2066.08V532.328H2170.08V636.328H2172.08V532.328H2177.08V530.328H2172.08V425.328H2177.08V424.328H2172.08V319.328H2177.08V317.328H2172.08V212.328H2177.08V210.328H2172.08V105.328H2177.08V103.328H2172.08V-1.67224H2177.08V-3.67224H-73.9219V210.328ZM2170.08 530.328V425.328H2066.08V530.328H2170.08ZM2064.08 530.328V425.328H1959.08V530.328H2064.08ZM1957.08 530.328V425.328H1852.08V530.328H1957.08ZM1850.08 530.328V425.328H1745.08V530.328H1850.08ZM1743.08 530.328V425.328H1638.08V530.328H1743.08ZM1636.08 530.328V425.328H1531.08V530.328H1636.08ZM1529.08 530.328V425.328H1424.08V530.328H1529.08ZM1422.08 530.328V425.328H1317.08V530.328H1422.08ZM1315.08 530.328V425.328H1211.08V530.328H1315.08ZM1209.08 530.328V425.328H1104.08V530.328H1209.08ZM1102.08 530.328V425.328H997.078V530.328H1102.08ZM995.078 530.328V425.328H890.078V530.328H995.078ZM888.078 530.328V425.328H783.078V530.328H888.078ZM781.078 530.328V425.328H676.078V530.328H781.078ZM674.078 530.328V425.328H569.078V530.328H674.078ZM567.078 530.328V425.328H462.078V530.328H567.078ZM460.078 530.328V425.328H355.078V530.328H460.078ZM354.078 530.328V425.328H249.078V530.328H354.078ZM247.078 530.328V425.328H142.078V530.328H247.078ZM140.078 530.328V425.328H35.0781V530.328H140.078ZM33.0781 530.328V425.328H-71.9219V530.328H33.0781ZM33.0781 424.328H-71.9219V319.328H33.0781V424.328ZM140.078 424.328H35.0781V319.328H140.078V424.328ZM247.078 424.328H142.078V319.328H247.078V424.328ZM354.078 424.328H249.078V319.328H354.078V424.328ZM460.078 424.328H355.078V319.328H460.078V424.328ZM567.078 424.328H462.078V319.328H567.078V424.328ZM674.078 424.328H569.078V319.328H674.078V424.328ZM781.078 424.328H676.078V319.328H781.078V424.328ZM888.078 424.328H783.078V319.328H888.078V424.328ZM995.078 424.328H890.078V319.328H995.078V424.328ZM1102.08 424.328H997.078V319.328H1102.08V424.328ZM1209.08 424.328H1104.08V319.328H1209.08V424.328ZM1315.08 424.328H1211.08V319.328H1315.08V424.328ZM1422.08 424.328H1317.08V319.328H1422.08V424.328ZM1529.08 424.328H1424.08V319.328H1529.08V424.328ZM1636.08 424.328H1531.08V319.328H1636.08V424.328ZM1743.08 424.328H1638.08V319.328H1743.08V424.328ZM1850.08 424.328H1745.08V319.328H1850.08V424.328ZM1957.08 424.328H1852.08V319.328H1957.08V424.328ZM2064.08 424.328H1959.08V319.328H2064.08V424.328ZM2170.08 424.328H2066.08V319.328H2170.08V424.328ZM2170.08 317.328V212.328H2066.08V317.328H2170.08ZM2064.08 317.328V212.328H1959.08V317.328H2064.08ZM1957.08 317.328V212.328H1852.08V317.328H1957.08ZM1850.08 317.328V212.328H1745.08V317.328H1850.08ZM1743.08 317.328V212.328H1638.08V317.328H1743.08ZM1636.08 317.328V212.328H1531.08V317.328H1636.08ZM1529.08 317.328V212.328H1424.08V317.328H1529.08ZM1422.08 317.328V212.328H1317.08V317.328H1422.08ZM1315.08 317.328V212.328H1211.08V317.328H1315.08ZM1209.08 317.328V212.328H1104.08V317.328H1209.08ZM1102.08 317.328V212.328H997.078V317.328H1102.08ZM995.078 317.328V212.328H890.078V317.328H995.078ZM888.078 317.328V212.328H783.078V317.328H888.078ZM781.078 317.328V212.328H676.078V317.328H781.078ZM674.078 317.328V212.328H569.078V317.328H674.078ZM567.078 317.328V212.328H462.078V317.328H567.078ZM460.078 317.328V212.328H355.078V317.328H460.078ZM354.078 317.328V212.328H249.078V317.328H354.078ZM247.078 317.328V212.328H142.078V317.328H247.078ZM140.078 317.328V212.328H35.0781V317.328H140.078ZM33.0781 317.328V212.328H-71.9219V317.328H33.0781ZM140.078 210.328H35.0781V105.328H140.078V210.328ZM247.078 210.328H142.078V105.328H247.078V210.328ZM354.078 210.328H249.078V105.328H354.078V210.328ZM460.078 210.328H355.078V105.328H460.078V210.328ZM567.078 210.328H462.078V105.328H567.078V210.328ZM674.078 210.328H569.078V105.328H674.078V210.328ZM781.078 210.328H676.078V105.328H781.078V210.328ZM888.078 210.328H783.078V105.328H888.078V210.328ZM995.078 210.328H890.078V105.328H995.078V210.328ZM1102.08 210.328H997.078V105.328H1102.08V210.328ZM1209.08 210.328H1104.08V105.328H1209.08V210.328ZM1315.08 210.328H1211.08V105.328H1315.08V210.328ZM1422.08 210.328H1317.08V105.328H1422.08V210.328ZM1529.08 210.328H1424.08V105.328H1529.08V210.328ZM1636.08 210.328H1531.08V105.328H1636.08V210.328ZM1743.08 210.328H1638.08V105.328H1743.08V210.328ZM1850.08 210.328H1745.08V105.328H1850.08V210.328ZM1957.08 210.328H1852.08V105.328H1957.08V210.328ZM2064.08 210.328H1959.08V105.328H2064.08V210.328ZM2170.08 210.328H2066.08V105.328H2170.08V210.328ZM-71.9219 103.328H33.0781V-1.67224H-71.9219V103.328ZM35.0781 103.328H140.078V-1.67224H35.0781V103.328ZM142.078 103.328H247.078V-1.67224H142.078V103.328ZM249.078 103.328H354.078V-1.67224H249.078V103.328ZM355.078 103.328H460.078V-1.67224H355.078V103.328ZM462.078 103.328H567.078V-1.67224H462.078V103.328ZM569.078 103.328H674.078V-1.67224H569.078V103.328ZM676.078 103.328H781.078V-1.67224H676.078V103.328ZM783.078 103.328H888.078V-1.67224H783.078V103.328ZM890.078 103.328H995.078V-1.67224H890.078V103.328ZM997.078 103.328H1102.08V-1.67224H997.078V103.328ZM1104.08 103.328H1209.08V-1.67224H1104.08V103.328ZM1211.08 103.328H1315.08V-1.67224H1211.08V103.328ZM1317.08 103.328H1422.08V-1.67224H1317.08V103.328ZM1424.08 103.328H1529.08V-1.67224H1424.08V103.328ZM1531.08 103.328H1636.08V-1.67224H1531.08V103.328ZM1638.08 103.328H1743.08V-1.67224H1638.08V103.328ZM1745.08 103.328H1850.08V-1.67224H1745.08V103.328ZM1852.08 103.328H1957.08V-1.67224H1852.08V103.328ZM1959.08 103.328H2064.08V-1.67224H1959.08V103.328ZM2066.08 103.328H2170.08V-1.67224H2066.08V103.328Z" fill="#0F0F0F"/>
    <g id="bg logo">
    <path id="Vector" d="M1292.95 268.207C1292.95 334.369 1238.87 388.032 1172.19 388.032C1140.28 388.139 1109.62 375.576 1086.97 353.101C1075.75 341.98 1066.84 328.758 1060.75 314.191C1054.65 299.625 1051.48 283.999 1051.43 268.207C1051.43 202.053 1105.51 148.382 1172.19 148.382C1204.11 148.281 1234.76 160.843 1257.42 183.313C1280.05 205.781 1292.83 236.317 1292.95 268.207ZM1090.53 604.795C1090.53 670.949 1036.44 724.62 969.762 724.62C937.848 724.721 907.198 712.159 884.535 689.689C861.904 667.222 849.123 636.685 849.003 604.795C849.003 538.633 903.081 484.97 969.762 484.97C1001.68 484.863 1032.33 497.426 1054.99 519.901C1066.2 531.022 1075.11 544.244 1081.21 558.81C1087.31 573.377 1090.47 589.003 1090.53 604.795Z" stroke="white" stroke-opacity="0.12" stroke-width="2"/>
    <path id="Vector_2" d="M877.735 160.556C669.599 202.8 513 385.735 513 605.169C513 855.832 717.467 1059 969.665 1059C1066.81 1059.18 1161.48 1028.36 1239.9 971.023C1318.34 913.677 1376.44 832.807 1405.76 740.171C1350.89 767.04 1291.8 784.249 1231.07 791.042C1201.23 832.456 1161.96 866.17 1116.5 889.394C1071.04 912.619 1020.71 924.687 969.665 924.6C792.151 924.6 648.238 781.571 648.238 605.177C648.238 467.35 736.053 349.952 859.1 305.183C854.051 256.182 860.429 206.677 877.735 160.556Z" stroke="white" stroke-opacity="0.12" stroke-width="2"/>
    <path id="Vector_3" d="M1264.22 712.446C1472.36 670.202 1628.95 487.267 1628.95 267.833C1628.95 17.1696 1424.49 -185.999 1172.29 -185.999C1075.14 -186.182 980.471 -155.361 902.05 -98.0213C823.614 -40.6768 765.512 40.19 736.19 132.823C791.064 105.953 850.159 88.7469 910.88 81.96C940.723 40.546 979.997 6.83233 1025.45 -16.3922C1070.91 -39.6167 1121.24 -51.6845 1172.29 -51.5976C1349.8 -51.5976 1493.72 91.4314 1493.72 267.825C1493.72 405.652 1405.9 523.05 1282.85 567.818C1287.91 616.82 1281.53 666.327 1264.22 712.446Z" stroke="white" stroke-opacity="0.12" stroke-width="2"/>
    </g>
    <g id="Background Gradients">
    <path id="Vector_4" opacity="0.2" d="M943.078 1917.33C2439.77 1917.33 3653.08 1300.83 3653.08 540.328C3653.08 -220.172 2439.77 -836.672 943.078 -836.672C-553.622 -836.672 -1766.92 -220.172 -1766.92 540.328C-1766.92 1300.83 -553.622 1917.33 943.078 1917.33Z" fill="url(#paint0_radial_992_2255)" fill-opacity="0.6"/>
    <g id="Group" opacity="0.3">
    <path id="Vector_5" d="M-539.577 3462.63C1159.48 4109.02 2660.99 3925.4 2814.13 3052.5C2967.27 2179.6 1714.06 947.978 14.9944 301.589C-1684.07 -344.801 -3185.57 -161.18 -3338.71 711.717C-3491.85 1584.61 -2238.64 2816.24 -539.577 3462.63Z" fill="url(#paint1_radial_992_2255)"/>
    <path id="Vector_6" d="M-539.577 3462.63C1159.48 4109.02 2660.99 3925.4 2814.13 3052.5C2967.27 2179.6 1714.06 947.978 14.9944 301.589C-1684.07 -344.801 -3185.57 -161.18 -3338.71 711.717C-3491.85 1584.61 -2238.64 2816.24 -539.577 3462.63Z" fill="url(#paint2_radial_992_2255)"/>
    </g>
    <path id="Vector_7" opacity="0.3" d="M2390.75 528.16C4246.83 666.742 5782.55 362.906 5820.88 -150.478C5859.22 -663.861 4385.64 -1192.38 2529.56 -1330.96C673.486 -1469.55 -862.236 -1165.71 -900.567 -652.327C-938.898 -138.944 534.676 389.579 2390.75 528.16Z" fill="url(#paint3_radial_992_2255)"/>
    </g>
    <g id="Logo">
    <path id="Vector_8" d="M928.138 550.388C927.619 550.388 927.166 550.194 926.777 549.805C926.388 549.416 926.194 548.962 926.194 548.444V508.075H912.586C912.003 508.075 911.549 507.881 911.16 507.557C910.772 507.103 910.642 506.649 910.642 506.131V497.837C910.642 497.189 910.772 496.8 911.16 496.411C911.549 496.023 912.003 495.893 912.521 495.893H953.862C954.12 495.884 954.377 495.928 954.617 496.022C954.857 496.117 955.075 496.26 955.257 496.442C955.439 496.625 955.582 496.842 955.677 497.082C955.771 497.322 955.815 497.579 955.806 497.837V506.131C955.815 506.389 955.771 506.646 955.677 506.885C955.582 507.125 955.439 507.343 955.257 507.526C955.075 507.708 954.857 507.851 954.617 507.945C954.377 508.04 954.12 508.084 953.862 508.075H940.19V548.379C940.19 548.898 939.996 549.351 939.672 549.74C939.486 549.929 939.264 550.079 939.019 550.179C938.774 550.279 938.511 550.328 938.246 550.323H928.138V550.388ZM954.186 550.388C953.798 550.388 953.409 550.194 953.085 549.87C952.761 549.546 952.566 549.157 952.566 548.703C952.566 548.444 952.566 548.185 952.696 548.055L970.71 498.161C970.904 497.513 971.228 496.995 971.747 496.541C972.307 496.12 972.989 495.893 973.69 495.893H985.095C985.765 495.881 986.42 496.091 986.959 496.489C987.498 496.887 987.89 497.452 988.076 498.096L1006.02 547.99L1006.22 548.703C1006.22 549.157 1006.02 549.546 1005.64 549.87C1005.38 550.194 1004.99 550.388 1004.53 550.388H995.074C993.778 550.388 993 549.805 992.611 548.703L989.631 540.798H969.09L966.174 548.703C965.785 549.805 964.878 550.388 963.647 550.388H954.186ZM986.585 529.653L979.457 509.047L972.265 529.588H986.52L986.585 529.653ZM1033.63 551.166C1027.5 551.522 1021.46 549.608 1016.65 545.787C1012.63 542.223 1010.56 536.78 1010.56 529.588V497.837C1010.56 497.318 1010.75 496.865 1011.14 496.476C1011.53 496.087 1011.99 495.958 1012.5 495.958H1022.42C1023 495.958 1023.46 496.087 1023.78 496.476C1024.23 496.865 1024.43 497.319 1024.43 497.902V529.458C1024.43 532.828 1025.2 535.355 1026.7 537.104C1028.32 538.724 1030.58 539.567 1033.56 539.567C1036.48 539.567 1038.75 538.724 1040.3 536.975C1041.92 535.29 1042.7 532.763 1042.7 529.458V497.837C1042.7 497.189 1042.89 496.8 1043.22 496.411C1043.59 496.069 1044.08 495.883 1044.58 495.893H1054.62C1055.14 495.893 1055.6 496.023 1055.92 496.411C1056.12 496.591 1056.28 496.811 1056.39 497.056C1056.5 497.301 1056.56 497.567 1056.57 497.837V529.588C1056.57 536.716 1054.49 542.159 1050.35 545.723C1045.63 549.526 1039.68 551.442 1033.63 551.101V551.166ZM1068.62 550.388C1068.1 550.388 1067.65 550.194 1067.26 549.805C1066.87 549.416 1066.68 548.962 1066.68 548.444V497.902C1066.68 497.254 1066.87 496.865 1067.26 496.476C1067.65 496.087 1068.1 495.958 1068.62 495.958H1089.48C1096.22 495.958 1101.41 497.513 1105.17 500.623C1107.07 502.198 1108.57 504.197 1109.56 506.458C1110.55 508.72 1111 511.182 1110.87 513.648C1110.87 517.276 1110.03 520.387 1108.28 522.914C1106.57 525.477 1104.16 527.501 1101.34 528.745L1111.84 547.861C1112.03 548.185 1112.1 548.509 1112.1 548.703C1112.1 549.157 1111.9 549.546 1111.52 549.87C1111.39 550.031 1111.24 550.161 1111.06 550.251C1110.88 550.341 1110.68 550.388 1110.48 550.388H1100.24C1099.56 550.401 1098.9 550.202 1098.34 549.819C1097.78 549.435 1097.36 548.886 1097.13 548.25L1088.38 531.143H1080.54V548.444C1080.54 548.962 1080.35 549.481 1079.89 549.805C1079.57 550.194 1079.05 550.388 1078.53 550.388H1068.55H1068.62ZM1089.35 520.127C1091.69 520.127 1093.5 519.544 1094.73 518.378C1095.35 517.736 1095.84 516.974 1096.15 516.137C1096.46 515.301 1096.6 514.409 1096.55 513.518C1096.55 511.444 1095.9 509.824 1094.73 508.593C1093.57 507.362 1091.75 506.714 1089.35 506.714H1080.54V520.127H1089.35ZM1121.69 550.388C1121.17 550.388 1120.72 550.194 1120.33 549.805C1119.94 549.416 1119.81 548.962 1119.81 548.444V497.902C1119.81 497.254 1120 496.865 1120.33 496.476C1120.72 496.087 1121.17 495.958 1121.69 495.958H1132.06C1132.57 495.958 1133.03 496.087 1133.35 496.476C1133.81 496.865 1134 497.319 1134 497.902V548.444C1134 548.962 1133.81 549.481 1133.35 549.805C1133.03 550.194 1132.57 550.388 1132.06 550.388H1121.69Z" fill="#F7F7F7"/>
    <path id="Vector_9" d="M851.482 504.058C851.482 506.807 850.39 509.444 848.445 511.389C846.501 513.333 843.864 514.425 841.114 514.425C838.365 514.425 835.728 513.333 833.783 511.389C831.839 509.444 830.747 506.807 830.747 504.058C830.747 498.29 835.412 493.56 841.114 493.56C846.946 493.56 851.482 498.29 851.482 504.058Z" fill="#FFC131"/>
    <path id="Vector_10" d="M823.748 523.626C818.02 523.626 813.381 528.324 813.381 534.124C813.372 535.494 813.633 536.852 814.15 538.121C814.666 539.39 815.428 540.545 816.39 541.52C817.353 542.494 818.498 543.27 819.761 543.802C821.023 544.334 822.378 544.612 823.748 544.621C829.476 544.621 834.116 539.923 834.116 534.124C834.124 532.754 833.863 531.395 833.347 530.126C832.83 528.857 832.069 527.703 831.106 526.728C830.143 525.753 828.998 524.977 827.736 524.445C826.473 523.913 825.118 523.635 823.748 523.626Z" fill="#24C8DB"/>
    <path id="Vector_11" fill-rule="evenodd" clip-rule="evenodd" d="M862.627 537.752C858.487 540.472 853.87 542.385 849.02 543.39C850.408 539.309 850.851 534.966 850.316 530.689C853.902 529.428 857.191 527.442 859.977 524.856C862.764 522.27 864.989 519.139 866.515 515.656C868.714 510.703 869.455 505.225 868.652 499.866C867.848 494.506 865.534 489.487 861.979 485.396C858.451 481.368 853.833 478.448 848.682 476.988C843.53 475.527 838.066 475.589 832.95 477.166C827.133 478.993 822.079 482.682 818.565 487.664C813.251 488.312 808.197 489.802 803.402 492.2C805.307 486.035 808.669 480.42 813.203 475.829C817.737 471.239 823.31 467.808 829.451 465.827C836.727 463.52 844.521 463.395 851.868 465.468C859.215 467.541 865.794 471.72 870.792 477.49C874.592 481.824 877.418 486.921 879.081 492.44C880.743 497.958 881.203 503.769 880.429 509.48C879.656 515.191 877.666 520.67 874.595 525.548C871.524 530.425 867.443 534.586 862.627 537.752ZM803.855 499.457L813.575 500.623C813.782 498.718 814.223 496.852 814.871 495.051C810.983 495.958 807.29 497.448 803.855 499.457Z" fill="#FFC131"/>
    <path id="Vector_12" fill-rule="evenodd" clip-rule="evenodd" d="M802.235 500.494C806.414 497.758 811.077 495.844 815.973 494.856C814.484 498.936 813.952 503.303 814.417 507.621C810.853 508.873 807.583 510.84 804.808 513.404C802.033 515.967 799.812 519.071 798.283 522.525C796.085 527.479 795.345 532.956 796.148 538.315C796.952 543.674 799.265 548.694 802.819 552.786C806.352 556.825 810.981 559.753 816.146 561.214C821.31 562.674 826.787 562.605 831.913 561.015C837.729 559.188 842.784 555.499 846.298 550.518C851.547 549.934 856.666 548.379 861.461 546.047C859.556 552.211 856.194 557.826 851.66 562.417C847.126 567.007 841.552 570.438 835.412 572.419C828.126 574.74 820.319 574.872 812.959 572.799C805.599 570.725 799.009 566.538 794.006 560.756C790.205 556.423 787.378 551.325 785.714 545.807C784.051 540.288 783.591 534.477 784.365 528.765C785.139 523.054 787.129 517.575 790.2 512.698C793.272 507.82 797.354 503.659 802.171 500.494H802.235Z" fill="#24C8DB"/>
    </g>
    <g id="Frame 71">
    <text id="Blog post title" fill="white" xml:space="preserve" style="white-space: pre" font-family="SFPro" font-size="96" letter-spacing="0em"><tspan x="86" y="251.625">${
			postTitle[0] || ''
		} </tspan><tspan x="86" y="323.625">${postTitle[1] || ''} 
		</tspan></text>
    <text id="Blog excerpt." fill="white" xml:space="preserve" style="white-space: pre" font-family="SFPro" font-size="48" letter-spacing="0em"><tspan x="86" y="368.562">${
			postExcerpt[0] || ''
		}</tspan>
        <tspan x="86" y="416.562">${postExcerpt[1] || ''}  </tspan></text>
    <text id="11 October 2023" fill="white" xml:space="preserve" style="white-space: pre" font-family="SFPro" font-size="36" letter-spacing="0em"><tspan x="86" y="510.297">${postDate}</tspan></text>
    </g>
    </g>
    <defs>
    <radialGradient id="paint0_radial_992_2255" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(943.078 540.328) rotate(90) scale(1377 2710)">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="white" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="paint1_radial_992_2255" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-248.115 1896.77) rotate(99.9507) scale(1604.66 3232.39)">
    <stop stop-color="#FF1FC0"/>
    <stop offset="1" stop-color="#FF003D" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="paint2_radial_992_2255" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-248.115 1896.77) rotate(99.9507) scale(1604.66 3232.39)">
    <stop stop-color="#FF1FC0"/>
    <stop offset="1" stop-color="#FF003D" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="paint3_radial_992_2255" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2486.61 -390.678) rotate(94.27) scale(932.152 3370.08)">
    <stop stop-color="#1FA1FF"/>
    <stop offset="1" stop-color="#00D1FF" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="clip0_992_2255">
    <rect width="1200" height="630" fill="white"/>
    </clipPath>
    </defs>
    </svg>`;
}

function defaultTemplate(title: string[], description?: string[]): string {
	const font = {
		title: 96,
		desc: 48,
	};
	const titleContent = title[1]
		? `<tspan x="86" y="210.625">${title[0]}</tspan><tspan x="86" y="325.625">${title[1]}</tspan>`
		: `<tspan x="86" y="349.125">${title[0]}</tspan>`;

	let descContent = '';
  if (description) {
		descContent = description[1]
			? `<tspan x="86" y="419.062">${description[0]}</tspan><tspan x="86" y="476.062">${description[1]}</tspan>`
			: `<tspan x="86" y="442.562">${description[0]}</tspan>`;
	}
	return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Open Graph Image: Long" clip-path="url(#clip0_992_2233)">
        <rect width="1200" height="630" fill="white"/>
        <path id="background" d="M-73.9219 -3.67224H2177.08V636.328H-73.9219V-3.67224Z" fill="#050505"/>
        <path id="lines" fill-rule="evenodd" clip-rule="evenodd" d="M-71.9219 105.328V210.328H33.0781V105.328H-71.9219ZM-73.9219 210.328V636.328H-71.9219V532.328H33.0781V636.328H35.0781V532.328H140.078V636.328H142.078V532.328H247.078V636.328H249.078V532.328H354.078V636.328H355.078V532.328H460.078V636.328H462.078V532.328H567.078V636.328H569.078V532.328H674.078V636.328H676.078V532.328H781.078V636.328H783.078V532.328H888.078V636.328H890.078V532.328H995.078V636.328H997.078V532.328H1102.08V636.328H1104.08V532.328H1209.08V636.328H1211.08V532.328H1315.08V636.328H1317.08V532.328H1422.08V636.328H1424.08V532.328H1529.08V636.328H1531.08V532.328H1636.08V636.328H1638.08V532.328H1743.08V636.328H1745.08V532.328H1850.08V636.328H1852.08V532.328H1957.08V636.328H1959.08V532.328H2064.08V636.328H2066.08V532.328H2170.08V636.328H2172.08V532.328H2177.08V530.328H2172.08V425.328H2177.08V424.328H2172.08V319.328H2177.08V317.328H2172.08V212.328H2177.08V210.328H2172.08V105.328H2177.08V103.328H2172.08V-1.67224H2177.08V-3.67224H-73.9219V210.328ZM2170.08 530.328V425.328H2066.08V530.328H2170.08ZM2064.08 530.328V425.328H1959.08V530.328H2064.08ZM1957.08 530.328V425.328H1852.08V530.328H1957.08ZM1850.08 530.328V425.328H1745.08V530.328H1850.08ZM1743.08 530.328V425.328H1638.08V530.328H1743.08ZM1636.08 530.328V425.328H1531.08V530.328H1636.08ZM1529.08 530.328V425.328H1424.08V530.328H1529.08ZM1422.08 530.328V425.328H1317.08V530.328H1422.08ZM1315.08 530.328V425.328H1211.08V530.328H1315.08ZM1209.08 530.328V425.328H1104.08V530.328H1209.08ZM1102.08 530.328V425.328H997.078V530.328H1102.08ZM995.078 530.328V425.328H890.078V530.328H995.078ZM888.078 530.328V425.328H783.078V530.328H888.078ZM781.078 530.328V425.328H676.078V530.328H781.078ZM674.078 530.328V425.328H569.078V530.328H674.078ZM567.078 530.328V425.328H462.078V530.328H567.078ZM460.078 530.328V425.328H355.078V530.328H460.078ZM354.078 530.328V425.328H249.078V530.328H354.078ZM247.078 530.328V425.328H142.078V530.328H247.078ZM140.078 530.328V425.328H35.0781V530.328H140.078ZM33.0781 530.328V425.328H-71.9219V530.328H33.0781ZM33.0781 424.328H-71.9219V319.328H33.0781V424.328ZM140.078 424.328H35.0781V319.328H140.078V424.328ZM247.078 424.328H142.078V319.328H247.078V424.328ZM354.078 424.328H249.078V319.328H354.078V424.328ZM460.078 424.328H355.078V319.328H460.078V424.328ZM567.078 424.328H462.078V319.328H567.078V424.328ZM674.078 424.328H569.078V319.328H674.078V424.328ZM781.078 424.328H676.078V319.328H781.078V424.328ZM888.078 424.328H783.078V319.328H888.078V424.328ZM995.078 424.328H890.078V319.328H995.078V424.328ZM1102.08 424.328H997.078V319.328H1102.08V424.328ZM1209.08 424.328H1104.08V319.328H1209.08V424.328ZM1315.08 424.328H1211.08V319.328H1315.08V424.328ZM1422.08 424.328H1317.08V319.328H1422.08V424.328ZM1529.08 424.328H1424.08V319.328H1529.08V424.328ZM1636.08 424.328H1531.08V319.328H1636.08V424.328ZM1743.08 424.328H1638.08V319.328H1743.08V424.328ZM1850.08 424.328H1745.08V319.328H1850.08V424.328ZM1957.08 424.328H1852.08V319.328H1957.08V424.328ZM2064.08 424.328H1959.08V319.328H2064.08V424.328ZM2170.08 424.328H2066.08V319.328H2170.08V424.328ZM2170.08 317.328V212.328H2066.08V317.328H2170.08ZM2064.08 317.328V212.328H1959.08V317.328H2064.08ZM1957.08 317.328V212.328H1852.08V317.328H1957.08ZM1850.08 317.328V212.328H1745.08V317.328H1850.08ZM1743.08 317.328V212.328H1638.08V317.328H1743.08ZM1636.08 317.328V212.328H1531.08V317.328H1636.08ZM1529.08 317.328V212.328H1424.08V317.328H1529.08ZM1422.08 317.328V212.328H1317.08V317.328H1422.08ZM1315.08 317.328V212.328H1211.08V317.328H1315.08ZM1209.08 317.328V212.328H1104.08V317.328H1209.08ZM1102.08 317.328V212.328H997.078V317.328H1102.08ZM995.078 317.328V212.328H890.078V317.328H995.078ZM888.078 317.328V212.328H783.078V317.328H888.078ZM781.078 317.328V212.328H676.078V317.328H781.078ZM674.078 317.328V212.328H569.078V317.328H674.078ZM567.078 317.328V212.328H462.078V317.328H567.078ZM460.078 317.328V212.328H355.078V317.328H460.078ZM354.078 317.328V212.328H249.078V317.328H354.078ZM247.078 317.328V212.328H142.078V317.328H247.078ZM140.078 317.328V212.328H35.0781V317.328H140.078ZM33.0781 317.328V212.328H-71.9219V317.328H33.0781ZM140.078 210.328H35.0781V105.328H140.078V210.328ZM247.078 210.328H142.078V105.328H247.078V210.328ZM354.078 210.328H249.078V105.328H354.078V210.328ZM460.078 210.328H355.078V105.328H460.078V210.328ZM567.078 210.328H462.078V105.328H567.078V210.328ZM674.078 210.328H569.078V105.328H674.078V210.328ZM781.078 210.328H676.078V105.328H781.078V210.328ZM888.078 210.328H783.078V105.328H888.078V210.328ZM995.078 210.328H890.078V105.328H995.078V210.328ZM1102.08 210.328H997.078V105.328H1102.08V210.328ZM1209.08 210.328H1104.08V105.328H1209.08V210.328ZM1315.08 210.328H1211.08V105.328H1315.08V210.328ZM1422.08 210.328H1317.08V105.328H1422.08V210.328ZM1529.08 210.328H1424.08V105.328H1529.08V210.328ZM1636.08 210.328H1531.08V105.328H1636.08V210.328ZM1743.08 210.328H1638.08V105.328H1743.08V210.328ZM1850.08 210.328H1745.08V105.328H1850.08V210.328ZM1957.08 210.328H1852.08V105.328H1957.08V210.328ZM2064.08 210.328H1959.08V105.328H2064.08V210.328ZM2170.08 210.328H2066.08V105.328H2170.08V210.328ZM-71.9219 103.328H33.0781V-1.67224H-71.9219V103.328ZM35.0781 103.328H140.078V-1.67224H35.0781V103.328ZM142.078 103.328H247.078V-1.67224H142.078V103.328ZM249.078 103.328H354.078V-1.67224H249.078V103.328ZM355.078 103.328H460.078V-1.67224H355.078V103.328ZM462.078 103.328H567.078V-1.67224H462.078V103.328ZM569.078 103.328H674.078V-1.67224H569.078V103.328ZM676.078 103.328H781.078V-1.67224H676.078V103.328ZM783.078 103.328H888.078V-1.67224H783.078V103.328ZM890.078 103.328H995.078V-1.67224H890.078V103.328ZM997.078 103.328H1102.08V-1.67224H997.078V103.328ZM1104.08 103.328H1209.08V-1.67224H1104.08V103.328ZM1211.08 103.328H1315.08V-1.67224H1211.08V103.328ZM1317.08 103.328H1422.08V-1.67224H1317.08V103.328ZM1424.08 103.328H1529.08V-1.67224H1424.08V103.328ZM1531.08 103.328H1636.08V-1.67224H1531.08V103.328ZM1638.08 103.328H1743.08V-1.67224H1638.08V103.328ZM1745.08 103.328H1850.08V-1.67224H1745.08V103.328ZM1852.08 103.328H1957.08V-1.67224H1852.08V103.328ZM1959.08 103.328H2064.08V-1.67224H1959.08V103.328ZM2066.08 103.328H2170.08V-1.67224H2066.08V103.328Z" fill="#0F0F0F"/>
        <g id="bg logo">
        <path id="Vector" d="M1292.95 268.207C1292.95 334.369 1238.87 388.032 1172.19 388.032C1140.28 388.139 1109.62 375.576 1086.97 353.101C1075.75 341.98 1066.84 328.758 1060.75 314.191C1054.65 299.625 1051.48 283.999 1051.43 268.207C1051.43 202.053 1105.51 148.382 1172.19 148.382C1204.11 148.281 1234.76 160.843 1257.42 183.313C1280.05 205.781 1292.83 236.317 1292.95 268.207ZM1090.53 604.795C1090.53 670.949 1036.44 724.62 969.762 724.62C937.848 724.721 907.198 712.159 884.535 689.689C861.904 667.222 849.123 636.685 849.003 604.795C849.003 538.633 903.081 484.97 969.762 484.97C1001.68 484.863 1032.33 497.426 1054.99 519.901C1066.2 531.022 1075.11 544.244 1081.21 558.81C1087.31 573.377 1090.47 589.003 1090.53 604.795Z" stroke="white" stroke-opacity="0.12" stroke-width="2"/>
        <path id="Vector_2" d="M877.735 160.556C669.599 202.8 513 385.735 513 605.169C513 855.832 717.467 1059 969.665 1059C1066.81 1059.18 1161.48 1028.36 1239.9 971.023C1318.34 913.677 1376.44 832.807 1405.76 740.171C1350.89 767.04 1291.8 784.249 1231.07 791.042C1201.23 832.456 1161.96 866.17 1116.5 889.394C1071.04 912.619 1020.71 924.687 969.665 924.6C792.151 924.6 648.238 781.571 648.238 605.177C648.238 467.35 736.053 349.952 859.1 305.183C854.051 256.182 860.429 206.677 877.735 160.556Z" stroke="white" stroke-opacity="0.12" stroke-width="2"/>
        <path id="Vector_3" d="M1264.22 712.446C1472.36 670.202 1628.95 487.267 1628.95 267.833C1628.95 17.1696 1424.49 -185.999 1172.29 -185.999C1075.14 -186.182 980.471 -155.361 902.05 -98.0213C823.614 -40.6768 765.512 40.19 736.19 132.823C791.064 105.953 850.159 88.7469 910.88 81.96C940.723 40.546 979.997 6.83233 1025.45 -16.3922C1070.91 -39.6167 1121.24 -51.6845 1172.29 -51.5976C1349.8 -51.5976 1493.72 91.4314 1493.72 267.825C1493.72 405.652 1405.9 523.05 1282.85 567.818C1287.91 616.82 1281.53 666.327 1264.22 712.446Z" stroke="white" stroke-opacity="0.12" stroke-width="2"/>
        </g>
        <g id="Background Gradients">
        <path id="Vector_4" opacity="0.2" d="M943.078 1917.33C2439.77 1917.33 3653.08 1300.83 3653.08 540.328C3653.08 -220.172 2439.77 -836.672 943.078 -836.672C-553.622 -836.672 -1766.92 -220.172 -1766.92 540.328C-1766.92 1300.83 -553.622 1917.33 943.078 1917.33Z" fill="url(#paint0_radial_992_2233)" fill-opacity="0.6"/>
        <g id="Group" opacity="0.3">
        <path id="Vector_5" d="M-539.577 3462.63C1159.48 4109.02 2660.99 3925.4 2814.13 3052.5C2967.27 2179.6 1714.06 947.978 14.9944 301.589C-1684.07 -344.801 -3185.57 -161.18 -3338.71 711.717C-3491.85 1584.61 -2238.64 2816.24 -539.577 3462.63Z" fill="url(#paint1_radial_992_2233)"/>
        <path id="Vector_6" d="M-539.577 3462.63C1159.48 4109.02 2660.99 3925.4 2814.13 3052.5C2967.27 2179.6 1714.06 947.978 14.9944 301.589C-1684.07 -344.801 -3185.57 -161.18 -3338.71 711.717C-3491.85 1584.61 -2238.64 2816.24 -539.577 3462.63Z" fill="url(#paint2_radial_992_2233)"/>
        </g>
        <path id="Vector_7" opacity="0.3" d="M2390.75 528.16C4246.83 666.742 5782.55 362.906 5820.88 -150.478C5859.22 -663.861 4385.64 -1192.38 2529.56 -1330.96C673.486 -1469.55 -862.236 -1165.71 -900.567 -652.327C-938.898 -138.944 534.676 389.579 2390.75 528.16Z" fill="url(#paint3_radial_992_2233)"/>
        </g>
        <g id="Logo">
        <path id="Vector_8" d="M928.138 550.388C927.619 550.388 927.166 550.194 926.777 549.805C926.388 549.416 926.194 548.962 926.194 548.444V508.075H912.586C912.003 508.075 911.549 507.881 911.16 507.557C910.772 507.103 910.642 506.649 910.642 506.131V497.837C910.642 497.189 910.772 496.8 911.16 496.411C911.549 496.023 912.003 495.893 912.521 495.893H953.862C954.12 495.884 954.377 495.928 954.617 496.022C954.857 496.117 955.075 496.26 955.257 496.442C955.439 496.625 955.582 496.842 955.677 497.082C955.771 497.322 955.815 497.579 955.806 497.837V506.131C955.815 506.389 955.771 506.646 955.677 506.885C955.582 507.125 955.439 507.343 955.257 507.526C955.075 507.708 954.857 507.851 954.617 507.945C954.377 508.04 954.12 508.084 953.862 508.075H940.19V548.379C940.19 548.898 939.996 549.351 939.672 549.74C939.486 549.929 939.264 550.079 939.019 550.179C938.774 550.279 938.511 550.328 938.246 550.323H928.138V550.388ZM954.186 550.388C953.798 550.388 953.409 550.194 953.085 549.87C952.761 549.546 952.566 549.157 952.566 548.703C952.566 548.444 952.566 548.185 952.696 548.055L970.71 498.161C970.904 497.513 971.228 496.995 971.747 496.541C972.307 496.12 972.989 495.893 973.69 495.893H985.095C985.765 495.881 986.42 496.091 986.959 496.489C987.498 496.887 987.89 497.452 988.076 498.096L1006.02 547.99L1006.22 548.703C1006.22 549.157 1006.02 549.546 1005.64 549.87C1005.38 550.194 1004.99 550.388 1004.53 550.388H995.074C993.778 550.388 993 549.805 992.611 548.703L989.631 540.798H969.09L966.174 548.703C965.785 549.805 964.878 550.388 963.647 550.388H954.186ZM986.585 529.653L979.457 509.047L972.265 529.588H986.52L986.585 529.653ZM1033.63 551.166C1027.5 551.522 1021.46 549.608 1016.65 545.787C1012.63 542.223 1010.56 536.78 1010.56 529.588V497.837C1010.56 497.318 1010.75 496.865 1011.14 496.476C1011.53 496.087 1011.99 495.958 1012.5 495.958H1022.42C1023 495.958 1023.46 496.087 1023.78 496.476C1024.23 496.865 1024.43 497.319 1024.43 497.902V529.458C1024.43 532.828 1025.2 535.355 1026.7 537.104C1028.32 538.724 1030.58 539.567 1033.56 539.567C1036.48 539.567 1038.75 538.724 1040.3 536.975C1041.92 535.29 1042.7 532.763 1042.7 529.458V497.837C1042.7 497.189 1042.89 496.8 1043.22 496.411C1043.59 496.069 1044.08 495.883 1044.58 495.893H1054.62C1055.14 495.893 1055.6 496.023 1055.92 496.411C1056.12 496.591 1056.28 496.811 1056.39 497.056C1056.5 497.301 1056.56 497.567 1056.57 497.837V529.588C1056.57 536.716 1054.49 542.159 1050.35 545.723C1045.63 549.526 1039.68 551.442 1033.63 551.101V551.166ZM1068.62 550.388C1068.1 550.388 1067.65 550.194 1067.26 549.805C1066.87 549.416 1066.68 548.962 1066.68 548.444V497.902C1066.68 497.254 1066.87 496.865 1067.26 496.476C1067.65 496.087 1068.1 495.958 1068.62 495.958H1089.48C1096.22 495.958 1101.41 497.513 1105.17 500.623C1107.07 502.198 1108.57 504.197 1109.56 506.458C1110.55 508.72 1111 511.182 1110.87 513.648C1110.87 517.276 1110.03 520.387 1108.28 522.914C1106.57 525.477 1104.16 527.501 1101.34 528.745L1111.84 547.861C1112.03 548.185 1112.1 548.509 1112.1 548.703C1112.1 549.157 1111.9 549.546 1111.52 549.87C1111.39 550.031 1111.24 550.161 1111.06 550.251C1110.88 550.341 1110.68 550.388 1110.48 550.388H1100.24C1099.56 550.401 1098.9 550.202 1098.34 549.819C1097.78 549.435 1097.36 548.886 1097.13 548.25L1088.38 531.143H1080.54V548.444C1080.54 548.962 1080.35 549.481 1079.89 549.805C1079.57 550.194 1079.05 550.388 1078.53 550.388H1068.55H1068.62ZM1089.35 520.127C1091.69 520.127 1093.5 519.544 1094.73 518.378C1095.35 517.736 1095.84 516.974 1096.15 516.137C1096.46 515.301 1096.6 514.409 1096.55 513.518C1096.55 511.444 1095.9 509.824 1094.73 508.593C1093.57 507.362 1091.75 506.714 1089.35 506.714H1080.54V520.127H1089.35ZM1121.69 550.388C1121.17 550.388 1120.72 550.194 1120.33 549.805C1119.94 549.416 1119.81 548.962 1119.81 548.444V497.902C1119.81 497.254 1120 496.865 1120.33 496.476C1120.72 496.087 1121.17 495.958 1121.69 495.958H1132.06C1132.57 495.958 1133.03 496.087 1133.35 496.476C1133.81 496.865 1134 497.319 1134 497.902V548.444C1134 548.962 1133.81 549.481 1133.35 549.805C1133.03 550.194 1132.57 550.388 1132.06 550.388H1121.69Z" fill="#F7F7F7"/>
        <path id="Vector_9" d="M851.482 504.058C851.482 506.807 850.39 509.444 848.445 511.389C846.501 513.333 843.864 514.425 841.114 514.425C838.365 514.425 835.728 513.333 833.783 511.389C831.839 509.444 830.747 506.807 830.747 504.058C830.747 498.29 835.412 493.56 841.114 493.56C846.946 493.56 851.482 498.29 851.482 504.058Z" fill="#FFC131"/>
        <path id="Vector_10" d="M823.748 523.626C818.02 523.626 813.381 528.324 813.381 534.124C813.372 535.494 813.633 536.852 814.15 538.121C814.666 539.39 815.428 540.545 816.39 541.52C817.353 542.494 818.498 543.27 819.761 543.802C821.023 544.334 822.378 544.612 823.748 544.621C829.476 544.621 834.116 539.923 834.116 534.124C834.124 532.754 833.863 531.395 833.347 530.126C832.83 528.857 832.069 527.703 831.106 526.728C830.143 525.753 828.998 524.977 827.736 524.445C826.473 523.913 825.118 523.635 823.748 523.626Z" fill="#24C8DB"/>
        <path id="Vector_11" fill-rule="evenodd" clip-rule="evenodd" d="M862.627 537.752C858.487 540.472 853.87 542.385 849.02 543.39C850.408 539.309 850.851 534.966 850.316 530.689C853.902 529.428 857.191 527.442 859.977 524.856C862.764 522.27 864.989 519.139 866.515 515.656C868.714 510.703 869.455 505.225 868.652 499.866C867.848 494.506 865.534 489.487 861.979 485.396C858.451 481.368 853.833 478.448 848.682 476.988C843.53 475.527 838.066 475.589 832.95 477.166C827.133 478.993 822.079 482.682 818.565 487.664C813.251 488.312 808.197 489.802 803.402 492.2C805.307 486.035 808.669 480.42 813.203 475.829C817.737 471.239 823.31 467.808 829.451 465.827C836.727 463.52 844.521 463.395 851.868 465.468C859.215 467.541 865.794 471.72 870.792 477.49C874.592 481.824 877.418 486.921 879.081 492.44C880.743 497.958 881.203 503.769 880.429 509.48C879.656 515.191 877.666 520.67 874.595 525.548C871.524 530.425 867.443 534.586 862.627 537.752ZM803.855 499.457L813.575 500.623C813.782 498.718 814.223 496.852 814.871 495.051C810.983 495.958 807.29 497.448 803.855 499.457Z" fill="#FFC131"/>
        <path id="Vector_12" fill-rule="evenodd" clip-rule="evenodd" d="M802.235 500.494C806.414 497.758 811.077 495.844 815.973 494.856C814.484 498.936 813.952 503.303 814.417 507.621C810.853 508.873 807.583 510.84 804.808 513.404C802.033 515.967 799.812 519.071 798.283 522.525C796.085 527.479 795.345 532.956 796.148 538.315C796.952 543.674 799.265 548.694 802.819 552.786C806.352 556.825 810.981 559.753 816.146 561.214C821.31 562.674 826.787 562.605 831.913 561.015C837.729 559.188 842.784 555.499 846.298 550.518C851.547 549.934 856.666 548.379 861.461 546.047C859.556 552.211 856.194 557.826 851.66 562.417C847.126 567.007 841.552 570.438 835.412 572.419C828.126 574.74 820.319 574.872 812.959 572.799C805.599 570.725 799.009 566.538 794.006 560.756C790.205 556.423 787.378 551.325 785.714 545.807C784.051 540.288 783.591 534.477 784.365 528.765C785.139 523.054 787.129 517.575 790.2 512.698C793.272 507.82 797.354 503.659 802.171 500.494H802.235Z" fill="#24C8DB"/>
        </g>
        <g id="Frame 71">
        <text id="Title but with multiple lines" fill="white" xml:space="preserve" style="white-space: pre" font-family="SF Pro" font-size="${font.title}" letter-spacing="0em">     ${titleContent}</text><text id="Description but with multiple lines. If it gets really long then..." fill="white" xml:space="preserve" style="white-space: pre" font-family="SF Pro" font-size="${font.desc}" letter-spacing="0em">${descContent}</text>
        </g>
        </g>
        <defs>
        <radialGradient id="paint0_radial_992_2233" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(943.078 540.328) rotate(90) scale(1377 2710)">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint1_radial_992_2233" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-248.115 1896.77) rotate(99.9507) scale(1604.66 3232.39)">
        <stop stop-color="#FF1FC0"/>
        <stop offset="1" stop-color="#FF003D" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint2_radial_992_2233" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-248.115 1896.77) rotate(99.9507) scale(1604.66 3232.39)">
        <stop stop-color="#FF1FC0"/>
        <stop offset="1" stop-color="#FF003D" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint3_radial_992_2233" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2486.61 -390.678) rotate(94.27) scale(932.152 3370.08)">
        <stop stop-color="#1FA1FF"/>
        <stop offset="1" stop-color="#00D1FF" stop-opacity="0"/>
        </radialGradient>
        <clipPath id="clip0_992_2233">
        <rect width="1200" height="630" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `;
}
