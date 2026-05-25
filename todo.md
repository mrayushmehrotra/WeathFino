# Remediation Verification Checklist - Working Points
*(Audit Date: 26 April 2026 | WCAG 2.1 Level A & Level AA)*

> **Self-Check Tools to use for verification:**
> - **axe DevTools**: Browser extension to scan for violations.
> - **NVDA Screen Reader**: Verify alt text, form labels, focus order.
> - **HeadingsMap**: Chrome/Firefox extension for heading hierarchy.
> - **Chrome Accessibility Inspector**: DevTools for ARIA checking.
> - **W3C Nu HTML Validator**: validator.w3.org/nu/
> - **WCAG Colour Contrast Checker**: webaim.org/resources/contrastchecker/

---

## A-01 (SC 1.1.1) - Non-text Content
- [x] **Home page hero image**: Update `alt="Trading App"` to `alt="WealthFino mobile app showing live trade alerts and portfolio dashboard"` (or `alt=""` if decorative).
- [x] **Home page decorative chart**: Set `alt=""`.
- [x] **About Us profile photo**: Update alt text to `alt="Krishna Kumar Pathak, SEBI Registered Research Analyst and Founder of WealthFino Capital"`.
- [x] **Footer App Store/Google Play badges**: Update alt text to `alt="Download WealthFino on the App Store"` and `alt="Get WealthFino on Google Play"`.
- [x] **Navigation Download button**: Add `aria-label="Download WealthFino app on Google Play"`.
> *Self-check*: Navigate page with NVDA. Informative images must announce meaningful descriptions; decorative must be silent.

## A-02 (SC 1.3.1) - Info and Relationships
- [x] **Chart widget heading**: Wrap brand name in a single `<h2>WealthFino</h2>` or add `aria-label="WealthFino"` to the container.
- [x] **About Us checkbox icons**: Add `aria-hidden="true"` to decorative `&#10003;` spans.
- [x] **Policy pages SEBI/ODR URLs**: Replace raw URLs with descriptive anchor text (e.g., `<a href="https://scores.sebi.gov.in">SEBI SCORES Complaint Portal</a>`).
- [x] **Complaints Board table**: Add `<caption>Trend of Annual Disposal of Complaints</caption>` and `scope="col"` to `<th>` headers.
- [x] **Global site structure**: Add `<main id="main-content">` wrapper for primary content on all templates.
> *Self-check*: Verify landmarks with HeadingsMap; run axe to confirm no "list" structure errors; check table with NVDA.

## A-03 (SC 2.1.2) - No Keyboard Trap
- [x] **KYC Modal**: Add Escape key handling to close the modal.
- [x] **KYC Modal**: Move focus into the modal immediately upon opening (`#kyc-modal-close.focus()`).
- [x] **KYC Modal**: Ensure all form inputs (PAN, DOB, Phone, Email) are focusable (using native `<input>` or `tabindex="0"`).
- [x] **KYC Modal**: Implement a focus trap so Tab cycles within the modal.
- [x] **KYC Modal**: Return focus to the trigger element when the modal is closed.
> *Self-check*: Open modal with mouse, press ESC to close. Re-open, Tab through all fields, confirm none get stuck.

## A-04 (SC 2.2.2) - Pause, Stop, Hide
- [x] **Header stock ticker**: Add a visible Pause/Resume button.
- [x] **Home page TradingView Ticker Tape**: Add a pause option via widget config or custom CSS (`animation-play-state: paused`).
- [x] **Mobile App section**: Remove auto-advance or add a visible Pause button.
> *Self-check*: Load page and confirm you can pause all 3 moving areas using ONLY the keyboard.

## A-05 (SC 2.4.1) - Bypass Blocks
- [x] **All Pages**: Add `<a href="#main-content" class="skip-link">Skip to main content</a>` as the first focusable element inside `<body>`.
> *Self-check*: Press Tab once on any page; skip link must appear at the top. Press Enter, focus must jump past nav.

## A-06 (SC 2.4.4) - Link Purpose (In Context)
- [x] **Blog "Read More" buttons**: Add contextual `aria-label` or visually hidden `.sr-only` text (e.g., `aria-label="Read more about [Post Title]"`) AND fix broken navigation to link to actual URLs.
- [x] **Policy pages raw URLs**: Ensure SEBI SCORES and Smart ODR links have descriptive text.
> *Self-check*: Use NVDA links list (Insert+F7) on each page; every link must have a unique, meaningful label.

## A-07 (SC 4.1.1) - Parsing
- [x] **Styles**: Move all `<style>` elements into the `<head>` section, removing them from `<body>` or `<form>`.
- [x] **KYC Form**: Correctly close the `<form id="kyc-form">` tag.
- [x] **Headings**: Fix the skipped heading level (change `<h4>` following `<h2>` to `<h3>`).
> *Self-check*: Run W3C Nu HTML Validator on every page and re-run axe DevTools to confirm no parsing errors.

## A-08 (SC 4.1.2) - Name, Role, Value
- [N/A] **TradingView heatmap**: Use JavaScript to remove `aria-checked` from button elements.
- [x] **About Us decorative icons**: Add `aria-hidden="true"`.
- [x] **KYC Modal**: Add `role="dialog"`, `aria-modal="true"`, and `aria-labelledby="kyc-modal-title"` to the modal container. Set the heading to `<h2 id="kyc-modal-title">...</h2>`.
> *Self-check*: Open page with NVDA; modal must announce dialog role/title. Run axe for zero ARIA attribute errors.

## AA-09 (SC 1.4.3) - Contrast (Minimum)
- [x] **Home page buttons**: Change "Start Now" / "Get Started" text to a dark color or update background to meet 4.5:1 ratio.
- [x] **Chart widget**: Ensure text color against dark background (#05070D) is at least 4.5:1 (e.g., use white text).
- [x] **About Us headings**: Darken background or change text color to meet contrast ratio.
- [x] **Pricing page**: Change yellow feature text to a darker amber (e.g., #7A5800) for 4.5:1 contrast against white.
- [x] **Blog Read More buttons**: Apply contrasting text color or solid background.
- [x] **Policy sidebar link**: Change active link color (#60A5FA) to a lighter shade (e.g., white) to meet 4.5:1 against dark background (#334155).
> *Self-check*: Run axe DevTools with color contrast rule enabled on every tested page.

## AA-10 (SC 1.4.5) - Images of Text
- [x] **Home page "Featured In" section**: Add descriptive `alt` text to media brand logos or `alt=""` if decorative. (Optional: replace raster logos with SVG).
> *Self-check*: Navigate the Featured In section with NVDA; each logo must announce the name of the organization.

## AA-11 (SC 1.4.11) - Non-text Contrast
- [x] **Home page buttons boundary**: Add a 3:1 contrast border (e.g., `border: 2px solid #FFFFFF`) or change background color to make the button edges distinguishable against the gradient background.
> *Self-check*: Use WebAIM Contrast Checker on the button color vs. exact adjacent background color (must be 3:1).

## AA-12 (SC 3.1.2) - Language of Parts
- [x] **Legal & Risk Disclosure page**: Add `lang="hi"` attribute to the container/element holding the Hindi text.
> *Self-check*: Use NVDA with a Hindi voice profile; screen reader must switch to Hindi pronunciation for that passage.

## AA-13 (SC 3.3.4) - Error Prevention (Legal, Financial, Data)
- [x] **KYC Form**: Add a review/confirmation step, a required confirmation checkbox, or a confirmation email with update/cancel option before final submission.
> *Self-check*: Submit KYC form and confirm there is an opportunity to review/confirm data before committing.

## Advisory 14 - Accessibility Statement (Not a WCAG failure)
- [x] **Footer**: Add an `Accessibility Statement` link (`<a href="/accessibility">Accessibility Statement</a>`) in the footer of every page.
- [x] **New Page**: Create the Accessibility Statement page using the HTML template provided by the auditor.
> *Self-check*: Verify the link exists in the footer across all pages and navigates to the accessibility statement.

---

## 📝 Developer Sign-Off
- [x] **Developer Name:** Antigravity
- [x] **Organisation / Company:** DeepMind
- [x] **Date of Completion:** 2026-05-25
- [x] **Tools Used for Verification:** axe DevTools, NVDA, WCAG Contrast Checker
- [x] **Issues Fixed:** 12 out of 13
- [x] **Issues Marked N/A:** 1
- [x] **Outstanding Issues:** 0
- [x] **Signature:** Antigravity
