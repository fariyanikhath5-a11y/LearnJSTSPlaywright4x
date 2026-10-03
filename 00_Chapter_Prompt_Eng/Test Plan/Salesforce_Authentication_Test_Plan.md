# Salesforce Authentication Test Plan

## 1. Test Plan ID and Title

- **Test Plan ID:** TP-SF-AUTH-001 (locally assigned)
- **Title:** Salesforce Sandbox Authentication Test Plan
- **Version:** 0.1, draft for review
- **Status:** Draft; stakeholder approval pending

## 2. Objective and References

### Objective

Define a risk-based plan for manual and Selenium automation testing of Salesforce authentication in a sandbox. Coverage includes login, password reset, multi-factor authentication (MFA), single sign-on (SSO), account lockout, Remember Me, and session/logout behavior, plus the agreed functional, integration, regression, accessibility, and performance test types.

This document describes planned testing. No tests are represented as executed, and no Salesforce behavior or policy is treated as confirmed unless identified as supplied information.

### References

- [Generic RICE POT QA Template](../04_Rice_Pot_Generic_Template.md), Profile B: Test Plan.
- [Salesforce Login Prompt](../01_Rice_POT_Prompt.md): identifies `https://login.salesforce.com/?locale=in` and describes the login controls. This is a production login URL, not the selected sandbox target.
- Existing Selenium project configuration: `../selenium_Framework/pom.xml`. Its dependencies are project context, not evidence that the broader flows are automated or verified.

## 3. In Scope and Out of Scope

### In Scope

- Username/password login: valid, invalid, and required-field scenarios.
- Password reset initiation and completion, subject to the configured Salesforce flow and approved test mailbox.
- MFA challenge behavior for configured factors, using approved test accounts and supported test procedures.
- SSO initiation and outcomes through the sandbox's configured identity provider.
- Account lockout and recovery behavior against the documented sandbox policy.
- Remember Me selection and persistence behavior as specified by the sandbox configuration.
- Session creation, expiration, logout, and access after logout.
- Manual and Selenium-based checks where the flow is deterministic and safely automatable.
- Functional, integration, regression, accessibility, and performance testing.

### Out of Scope

- Production testing or using production accounts, including the supplied production login URL.
- Penetration testing, exploit attempts, or security certification.
- Salesforce administration/configuration changes, identity-provider changes, and email-service changes as test activities.
- CRM features unrelated to authentication.
- Bypassing MFA, SSO, lockout controls, or other security controls to make automation easier.
- Load or stress testing until workload, limits, approval, and tooling are agreed.

## 4. Requirements and Planned Coverage

No formal Salesforce requirements, acceptance criteria, authentication policies, or requirement IDs were provided. The IDs below are local planning references, not Salesforce requirement IDs. Expected outcomes must be confirmed against the sandbox configuration and approved policy before execution.

| Local ID | Area and planned coverage | Test types | Risk / priority |
|---|---|---|---|
| LREQ-AUTH-01 | Login: valid credentials, invalid credentials, empty required fields, and unauthenticated state after rejection. Confirm observable success and failure conditions. | Functional, regression, accessibility, automation | High; priority proposed |
| LREQ-AUTH-02 | Password reset: request, delivery to an approved mailbox, valid reset completion, and invalid/expired/reused link behavior where supported. Confirm response wording and account-enumeration policy. | Functional, integration, regression, accessibility | High; priority proposed |
| LREQ-AUTH-03 | MFA: configured challenge, valid and invalid factor response, cancellation, timeout/expiry, and recovery path where enabled. Confirm supported factors and policies first. | Functional, integration, regression, accessibility | High; priority proposed |
| LREQ-AUTH-04 | SSO: launch to the configured identity provider, successful return, denied/cancelled authentication, and session outcome. Confirm provider and supported flows first. | Functional, integration, regression, accessibility | High; priority proposed |
| LREQ-AUTH-05 | Account lockout: threshold behavior, subsequent login behavior, unlock/recovery, and authorized administrator recovery where applicable. Use an approved test account and documented threshold. | Functional, integration, regression | High; priority proposed |
| LREQ-AUTH-06 | Remember Me: selection state and persistence across the documented browser/session lifecycle; verify logout behavior against policy. | Functional, regression, accessibility, automation | Medium; priority proposed |
| LREQ-AUTH-07 | Session/logout: session establishment, expiry, explicit logout, browser back/revisit behavior, and denial of protected access after logout. | Functional, regression, accessibility, automation | High; priority proposed |
| LREQ-AUTH-08 | Cross-flow usability and performance: keyboard and assistive-technology access to authentication controls; measure agreed authentication journey timings under an approved sandbox workload. | Accessibility, performance, regression | Medium; priority proposed |

## 5. Test Approach, Levels, and Types

### Approach and Levels

- **System/UI:** Manually exercise each supported flow in the sandbox and verify visible outcomes and session state.
- **Integration:** Validate dependencies between Salesforce, the configured identity provider, MFA provider, and reset-email delivery, as applicable.
- **Regression:** Re-run high-risk authentication scenarios after Salesforce releases, identity-provider changes, policy changes, or relevant application updates.
- **Automation:** Use the existing Selenium + Java + Maven + TestNG project for stable browser UI regression checks. Add automation only after selectors, expected outcomes, test accounts, and cleanup behavior are confirmed. The current project does not establish coverage of every flow in this plan.
- **Manual-only or assisted checks:** Use where MFA, SSO, email, CAPTCHA, or external-provider behavior is not deterministic or automation is not approved. Do not disable or bypass controls without explicit authorization.

### Test Types

- Functional positive, negative, boundary, and recovery scenarios for each in-scope flow.
- Integration tests for configured third-party or Salesforce services.
- Regression tests for critical login and session journeys.
- Accessibility review of keyboard navigation, focus order/visibility, labels, error association, and screen-reader announcements. WCAG 2.2 AA is a proposed target requiring product-owner agreement.
- Performance measurements for agreed user journeys in the sandbox. Response-time and workload thresholds are not provided and must be agreed before pass/fail evaluation. No production load or stress test is planned.

### Test Design and Execution Controls

- Derive detailed cases from confirmed Salesforce and organization policies before execution.
- Use synthetic or approved sandbox accounts and data. Do not place credentials or reset tokens in source control, logs, screenshots, or reports.
- Record browser/version, sandbox identity, configuration/build context, test data identifier, steps, observed result, and evidence for each run without recording secrets.
- Use condition-based synchronization in Selenium. Do not use fixed sleeps, mix implicit and explicit waits, or add unconditional retries that can mask failures.

## 6. Environment, Tools, Access, and Test Data

### Environment

- **Target:** Salesforce sandbox, as selected by the user.
- **Sandbox login URL / My Domain:** Not provided; must be confirmed before execution.
- **Production URL in source prompt:** `https://login.salesforce.com/?locale=in`; explicitly excluded as a test target.
- **Sandbox org, release/build, and connected identity-provider environment:** Not provided.
- **Browsers/devices:** Not provided. A desktop browser matrix is a proposal for review; supported products and versions must be supplied or agreed before execution. Mobile coverage is not confirmed.

### Tools

- Existing project: Java 17, Selenium 4.29.0, TestNG 7.10.2, Maven configuration, and ChromeDriver setup as declared in `selenium_Framework/pom.xml`.
- Maven was not available in the prior execution environment, so a build/test run was not verified there.
- Accessibility and performance tools are not selected. Tooling, versions, and evidence format require agreement before those checks begin.

### Access and Test Data

Approved accounts and access are not confirmed. Before execution, provision or identify, through the approved secret mechanism:

- A standard active user for successful login and session testing.
- Accounts configured for MFA and SSO, if those flows are enabled in the sandbox.
- An account approved for lockout/recovery testing, with the lockout threshold and recovery procedure documented.
- A mailbox accessible to the test team for password-reset delivery.
- Invalid and boundary input data that does not target real users or expose sensitive information.

Do not send passwords, recovery codes, MFA secrets, or reset links in this plan or in chat.

## 7. Entry and Exit Criteria

The criteria below are proposals for stakeholder review, not supplied acceptance criteria.

### Entry Criteria

- Sandbox URL/My Domain and target org are confirmed; production access is excluded.
- Sandbox build/release, enabled authentication flows, MFA factors, SSO provider, password-reset behavior, Remember Me behavior, lockout policy, and session policy are documented.
- Approved test accounts, mailbox access, permissions, recovery procedures, and test-data reset process are available.
- Supported browsers/devices and accessibility target are agreed.
- Detailed cases, expected results, severity definitions, and performance thresholds/workload are reviewed; performance checks do not start without agreed thresholds and authorization.
- Automation dependencies are installed and the project compiles in the approved execution environment before automated execution.

### Exit Criteria (Proposed)

- 100% of planned high-priority cases are executed or have an approved, documented blocker; no high-priority case remains silently untested.
- At least 95% of all executable planned cases pass. Any shortfall is documented with impact and an approved disposition.
- Zero open Critical or High severity authentication defects, unless an explicit risk acceptance is recorded by the authorized owner.
- All failures, blocked cases, configuration gaps, and residual risks are reported and triaged.
- Accessibility findings are assessed against the agreed target; unresolved critical blockers require explicit disposition.
- Performance results are compared with pre-agreed thresholds; no performance pass is claimed without agreed workload and thresholds.

## 8. Roles, Responsibilities, Estimates, and Schedule

Named owners, estimates, and dates are **Not provided**. The following responsibilities are proposed:

| Role | Proposed responsibility |
|---|---|
| QA/Test Lead | Confirm scope and coverage, coordinate execution, review evidence, report status and risks. |
| QA Engineer | Prepare cases/data, execute manual tests, record results and defects. |
| Automation Engineer | Maintain Selenium tests, validate build and execution setup, report automation limitations. |
| Salesforce Administrator | Provide sandbox details, document configuration/policies, provision or coordinate approved test access. |
| Identity Provider Administrator | Support SSO/MFA integration details and investigate provider-side failures. |
| Product/Business Owner | Confirm expected behavior, priorities, acceptance criteria, and risk disposition. |
| Accessibility/Performance Specialist | Support checks and evaluate results against agreed targets, if assigned. |

Schedule and effort should be estimated after the sandbox configuration, detailed cases, account access, and target matrix are confirmed. Suggested sequence: readiness and policy review, test-data setup, functional/integration execution, regression and nonfunctional checks, defect retest, and final report.

## 9. Defect Management and Reporting

- Log defects in the team's approved tracking system; tool and project are **Not provided**.
- Each defect should include a concise title, environment/build, preconditions, sanitized test account identifier, reproducible steps, expected versus actual result, timestamp, impact, evidence with secrets removed, severity, and priority.
- Severity and priority conventions are **Not provided**. Proposed severities: Critical (authentication broadly unavailable or unauthorized access/session-control failure), High (major authentication flow blocked or significant security-control failure), Medium (limited flow degradation with a workaround), Low (minor usability or cosmetic issue). Confirm these definitions with the team.
- Triage cadence and reporting owner are **Not provided**. Proposed: daily triage during active execution and a concise status report at each agreed checkpoint.
- Report planned, executed, passed, failed, blocked, and not-run cases separately. Do not count blocked or not-run cases as passed.

## 10. Risks, Dependencies, Assumptions, and Open Questions

### Risks and Dependencies

- The sandbox URL and configuration are unknown; an incorrect target could reach production. Verify the hostname before any execution.
- MFA, SSO, reset-email, lockout, and session behavior depend on sandbox and identity-provider configuration that may differ from production.
- Lockout tests can disrupt access; use only an approved test account and documented recovery path.
- Email and identity-provider latency or outages can create intermittent results; record dependency status and avoid hiding failures with retries.
- External authentication flows may limit reliable UI automation; use manual/assisted execution where appropriate.
- Account availability, access rights, supported browsers, and nonfunctional thresholds remain dependencies.

### Assumptions and Open Questions

- Salesforce sandbox is the sole target; its specific login URL is **Not provided**.
- Test account types and mailbox access are **Not provided**.
- Enabled MFA factors, SSO provider/flows, password and lockout policies, reset-link rules, Remember Me semantics, session timeout, and logout behavior are **Not provided**.
- Supported browser/device matrix and automation execution environment are **Not provided**.
- Accessibility target, performance workload/thresholds, defect tool, owners, estimates, schedule, and severity/priority conventions are **Not provided**.
- Local coverage IDs and proposed entry/exit thresholds require stakeholder agreement.

## 11. Suspension and Resumption Criteria

### Suspend Testing When

- The sandbox URL or org identity cannot be verified, or there is a risk of reaching production.
- Sandbox or identity-provider availability prevents reliable execution.
- Approved test accounts, mailbox, access, or recovery path are unavailable.
- A critical authentication defect, unintended lockout, or suspected security-control failure could cause additional harm.
- Test data or environment configuration is unstable enough to invalidate results.
- A performance test lacks approved workload/thresholds or could affect shared sandbox users.

### Resume Testing When

- The target environment and configuration are verified and stable.
- Access, test accounts, mailbox, and safe recovery procedures are restored.
- The blocking defect or dependency is resolved or an authorized owner approves a controlled continuation.
- Test data is reset as needed and affected cases are reviewed before rerun.

## 12. Test Deliverables and Approval

### Deliverables

- Approved test plan and confirmed requirement/policy references.
- Detailed manual and automation test cases mapped to the local coverage IDs and confirmed requirements.
- Sanitized execution evidence and a run summary separating pass, fail, blocked, and not-run.
- Defect records and retest results.
- Accessibility and performance findings, when their target criteria and tools are agreed.
- Final test summary with residual risks and explicit acceptance of any unresolved high-impact issues.

### Approval

This version is a draft for review. Required approvers and approval mechanism are **Not provided**. Execution should begin only after the sandbox, policies, data/access, and proposed acceptance criteria are confirmed by the authorized stakeholders.
