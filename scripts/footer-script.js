
/***********************************************/
/***************  Footer Inject  ***************/
/***********************************************/

var htmlWrapper = document.querySelector('footer');
var htmlTemplate = `<div class="footer-container">
		<div class="footer-col1">
			<a href="/" tabindex="0"><img alt="Easy Apps Logo" title="Easy Apps" src="assets/logo/easy-apps-logo.svg" width="300px" ></a>
			<p class="default darkGrey footer-copy-text">
				&copy; A.A.S. Development Studios Ltd. 2022
			</p>
		</div>		
		<div class="footer-col2">
			<h4 class="default white">Portfolio</h4>
			<p><a onclick="eventClick('FVP-ePDF', 'easyPDF')" class="darkGrey footer-link" tabindex="0">Easy PDF Signer</a></p>
			<p><a onclick="eventClick('FVP-eTodo', 'easyTodo')" class="darkGrey footer-link" tabindex="0">Easy Todo (Beta)</a></p>
			<p><a onclick="eventClick('FVP-Buginator', 'buginator')" class="darkGrey footer-link" tabindex="0">Buginator</a> 
				<span class="darkGrey" style="margin-left:10px;">
					<a onclick="eventClick('FVP-Bug-Android', 'bug-android')" tabindex="0"><img alt="Android" class="footer-link-icon" src="assets/icons/android.svg" width="17px" /></a> / 
					<a onclick="eventClick('FVP-Bug-Apple', 'bug-apple')" tabindex="0"><img alt="Apple" class="footer-link-icon" src="assets/icons/apple.svg" width="17px" /></a>		
				</span>
			</p>
		</div>
		<div class="footer-col3">
			<h4 class="default white">Company</h4>
			<p><a href="about.html" class="darkGrey footer-link" tabindex="0">About</a></p>
			<p><a href="contact.html" class="darkGrey footer-link" tabindex="0">Contact</a></p>
			<p><a href="privacy.html" class="darkGrey footer-link" tabindex="0">Privacy Policy</a></p>
		</div>
		<div class="footer-col4">
			<h4 class="default white">Social</h4>
			<div style="display:inline-flex;">
				<img alt="Facebook" src="assets/icons/facebook.svg" width="50px" class="social-link" />
				<img alt="LinkedIn" src="assets/icons/linkedin.svg" width="50px" class="social-link" />
			</div>
		</div>
	</div>`;
htmlWrapper.innerHTML = htmlTemplate;

