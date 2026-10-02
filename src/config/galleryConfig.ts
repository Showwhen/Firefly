import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// 支持jpg/png/webp/avif/gif格式
		// id: 相册唯一标识符（用于目录命名和URL路径），比如设置：id: "firefly-2026", 对应 public/gallery/firefly-2026/目录
		// cover: 手动指定封面图（可选，不填会把cover.*文件作为封面图，如果没有cover.*文件，则使用第一张图片作为封面图）
		// name: 相册名称
		// description: 相册描述
		// location: 相册拍摄地点
		// date: 相册日期，格式为 YYYY-MM-DD，用于排序和显示
		// tags: 相册标签，用于分类和过滤
		// password: 访问密码，设置后需要输入密码才能查看相册内容（可选）
		// passwordHint: 密码提示，设置后在输入密码错误时显示（可选，需配合password使用）
		// 每添加一个数组项就相当于添加了一个相册，记得在 public/gallery/ 目录下创建对应的子目录并放入图片
		{
			id: "JiaWuTai-2026",
			name: "登顶嘉午台",
			description: "遇事不决嘉午台，暑假登顶嘉午台。",
			location: "西安市·嘉午台",
			cover: "https://s41.ax1x.com/2026/10/02/pnJuTEt.jpg",
			date: "2026-07-29",
			tags: ["嘉午台", "徒步","暑假"],
		},
		{
			id: "NewYear-2026",
			name: "元旦2026",
			description: "初中毕业后的第一个元旦，有你们在身边❤️",
			location: "西安市·华阳城",
			cover: "https://free.picui.cn/free/19869/2026/10/02/6abf998e9d5f1.jpg",
			date: "2026-01-01",
			tags: ["华阳城", "元旦","初中","兄弟"],
		},
		{
			id: "OlaHouse-2025",
			name: "老家",
			description: "初中毕业暑假爽玩后，带着新买的相机回老家转转。",
			location: "商洛市·镇安县",
			cover: "https://bee-reg-ab.imagency.cn/mr/6831/26/6abfa2dc93a51.jpg",
			date: "2026-07-06",
			tags: ["老家", "镇安"],
		},
		{
			id: "BeiJing-2025",
			name: "北京单人行",
			description: "中考完当天下午一个人直接做高铁去北京，直接爽飞。",
			location: "北京市",
			cover: "https://bee-reg-ab.imagency.cn/mr/6831/26/6abfa64f7d444.jpg",
			date: "2026-06-23",
			tags: ["北京", "旅游"],
		},
		{
			id: "WaterPark-2025",
			name: "水上乐园",
			description:
				"初中刚毕业，没有作业的一个暑假😎",
			location: "西安市·华夏文旅",
			cover: "https://free.picui.cn/free/19869/2026/10/02/6abf9c3074732.jpg",
			date: "2025-08-21",
			tags: ["加密相册", "水世界", "暑假","初中","兄弟"],
			password: "3513",
			passwordHint: "还想偷偷看🤪",
		},
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 400,
};
