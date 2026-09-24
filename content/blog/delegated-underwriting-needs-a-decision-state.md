---
title: "Delegated underwriting needs a decision state"
excerpt: "An underwriting outcome should preserve the evidence, authority, referral, exception, and approval that produced it so the next person can reconstruct the decision."
publishedAt: "2026-09-24"
category: "Field notes"
author: "Sahil Maheshwari"
seoTitle: "Delegated Underwriting Decision State | Insuveo"
seoDescription: "How delegated underwriting records can preserve authority limits, referrals, overrides, evidence, and decision changes across handoffs."
---

A usable submission helps an underwriter reach a decision. The workflow still needs to preserve how that decision was made.

In delegated underwriting, a status such as quoted, referred, accepted, or declined is incomplete on its own. The next person may also need to know which evidence was considered, which authority applied, what exception arose, who approved it, and whether later information changed the result.

I think this requires a decision state that travels with the case. It should connect the outcome to its evidence, authority, referrals, and changes over time. This is a product design hypothesis from early workflow research. It does not establish how often current systems lose this context or whether teams would adopt another record layer.

## A case status cannot explain the decision

A status tells the team where a case sits. It rarely explains the full path that put it there.

Consider a case marked referred. The useful questions are more specific. What exceeded the underwriter’s authority? Which fact or proposed term caused the referral? What question needs an answer? Which work can continue while the referral remains open?

The same problem appears after approval. A simple approved status can hide whether the approval covered the risk, a price, a wording change, or a narrow exception. The team may see a completed step while the dependent action remains uncertain.

The decision state should preserve the object of the decision and its scope. That principle also matters in [claim approval records](/blog/what-approved-should-mean-inside-a-claim-record), but delegated underwriting adds an authority question: was the person allowed to make this decision, or did somebody else need to accept it?

## Authority is part of the decision context

Authority should be attached to the decision it governs.

A useful record can show the applicable authority source, its version or effective period, the relevant limit or condition, and the person acting under it. If the case sits outside that scope, the record should show the referral requirement before the workflow treats the decision as complete.

This matters when authority changes. A later reviewer should not assume that today’s limit applied when an earlier decision was made. The record should retain the authority context that existed at the time, then show any later change separately.

The system also needs to distinguish authority from expertise. A person may understand the risk and still need another approval. Another person may hold authority but require additional evidence before using it. Treating authority as a field beside the decision makes that boundary visible without trying to measure judgment itself.

## A referral should carry the unresolved question

A referral is a handoff with a defined reason.

The outgoing record should include the current evidence, the proposed outcome, the authority boundary, and the exact issue that needs review. It should also identify what remains open. Sending the whole case without that structure asks the recipient to reconstruct why the referral occurred.

When the answer returns, it should link to the original question. The record should show whether the reviewer accepted the proposal, changed a term, requested more evidence, or returned the case without a decision. If the response introduces a condition, that condition should remain attached to the resulting outcome.

This creates a continuous thread between the original underwriter and the reviewer. It also makes the handoff easier to audit internally because the team can see what crossed the authority boundary and what came back.

## An exception needs its own record

An exception is different from an ordinary approval because it departs from an expected rule, baseline, or condition.

The record should identify the specific departure, the reason offered, the supporting evidence, the person who accepted it, and the scope of that acceptance. An exception for one case should not quietly become a reusable rule for later cases.

A short note such as “approved by senior underwriter” does not preserve enough context. It leaves the next person to guess what was approved and why. The useful record ties the approval to the exact exception and shows any condition placed on it.

Exceptions may also change. New evidence can remove the need for one, while a revised term can create another. The decision state should retain both versions and make the current one clear. History is useful here because it explains why the final terms differ from the original proposal.

## Automation should prepare the decision state

An agent can help assemble this record before a person decides.

It can connect evidence to the case, check whether the evidence is current, identify a possible authority boundary, and draft a referral with the unresolved question. After review, it can capture the returned instruction, proposed changes, and source.

The agent should pause when the evidence conflicts, the authority source is unclear, or the exception requires interpretation. It should never invent the rationale that justifies an override. It should also avoid converting a reviewer’s informal comment into a final decision without confirmation.

That leaves automation with a narrow role. The agent prepares a reconstructable decision state and routes work to the right authority. The accountable person still interprets the risk and accepts the result.

That boundary connects to [underwriting preparation](/blog/what-underwriters-need-before-the-risk-decision). A complete submission improves the input. A decision state preserves what happened after the input reached someone with judgment and authority.

## Test one referral path from start to finish

I would test this inside one delegated workflow with a known referral boundary.

The test should begin when a case approaches or exceeds that boundary. It should follow the evidence used, the question sent for review, the response, any exception, the final outcome, and later changes. A colleague who did not see the original exchange should then try to reconstruct the decision.

The useful measures are whether the system identified the correct boundary, whether referrals contained a clear question, whether returned conditions reached the final record, and whether reviewers had to search other channels for the rationale. False referrals matter too because an overcautious system can create more work than it removes.

The design is useful if the final record explains both the outcome and the authority behind it. A pilot should show whether that clarity survives a real handoff without asking underwriters to duplicate the entire case.
