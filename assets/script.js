var MainDownloadBtn = document.getElementById("MainDownloadBtn");
var DownloadBtn = document.getElementById("DownloadBtn");

switch(Detect.OS){
	//case "macOS":
	//	DownloadBtn.href = "assets/apps/";
	//	DownloadBtn.textContent = "Download for Mac"
	//	DownloadBtn.classList.remove("isDisabled");
	//break;
	//case "Linux":
	//	DownloadBtn.href = "assets/apps/";
	//	DownloadBtn.textContent = "Download for Linux"
	//	DownloadBtn.classList.remove("isDisabled");
	//break;
	case "Windows":
		MainDownloadBtn.href = "https://github.com/OhHaiBrowser/Browser/releases/latest/download/OhHaiBrowser-windows-setup.exe";
		MainDownloadBtn.textContent = "Download for Windows"
		MainDownloadBtn.classList.remove("isDisabled");
	
		DownloadBtn.href = "https://github.com/OhHaiBrowser/Browser/releases/latest/download/OhHaiBrowser-windows-setup.exe";
		DownloadBtn.textContent = "Download for Windows"
		DownloadBtn.classList.remove("isDisabled");
	break;
	default:
		MainDownloadBtn.href = ""
		MainDownloadBtn.textContent = "Not yet supported on your OS"
	
		DownloadBtn.href = ""
		DownloadBtn.textContent = "Not yet supported on your OS"	
}