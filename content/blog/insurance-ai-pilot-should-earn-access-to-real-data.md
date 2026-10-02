---
title: "An insurance AI pilot should earn access to real data"
excerpt: "Synthetic cases can test an interface, but they cannot establish workflow fit. An insurance AI pilot should earn broader data access through bounded evidence."
publishedAt: "2026-10-02"
category: "Field notes"
author: "Insuveo"
seoTitle: "Insurance AI Pilot Data Access | Insuveo"
seoDescription: "How insurance teams can validate AI through staged data access, approved cases, shadow mode, deletion rules, and evidence-based pilot reviews."
---

Recent work on an insurance email copilot has exposed an awkward loop. The product needs realistic messages and documents to show whether it fits the workflow. A company may want evidence of that fit before it allows the product near real case material.

Synthetic cases help, but only up to a point. They can test whether an interface opens, a document can be parsed, or a comparison looks readable. They rarely contain the interruptions, ambiguous wording, version conflicts, forwarding history, and missing context that make insurance work difficult.

My current view is that an insurance AI pilot should earn access to real data. Access should grow in stages as the product proves a narrower claim. This is a product hypothesis from prototype and integration work. It does not establish that insurance teams will accept the sequence or that one access model will suit every company.

## Synthetic data can test mechanics

Synthetic data is useful when the team needs to test a controlled behavior. A fictional submission can show whether the product extracts expected fields. A designed email thread can test search, attachment handling, and the review interface. The product team can add known errors and check whether the system exposes them.

The weakness is that the product team also designed the case. It knows where the answer sits, which attachment matters, and what the expected output should be. The documents tend to follow the schema the product already understands. Even a large synthetic inbox may repeat the creator's assumptions about how the work happens.

That makes synthetic data appropriate for technical development and demonstrations. It provides weak evidence about workflow fit. It cannot show how operators react when a thread mixes several requests, an attachment replaces an earlier version, or a response requires context held outside the mailbox.

The pilot needs realistic ambiguity. It also needs a way to reach that ambiguity without asking for broad production access on day one.

## The first access level can be observation

The lowest access level does not require the product to retain case material.

An insurance professional can walk through a completed case while sharing only the parts needed to explain the work. The product team observes where the task starts, which sources the operator opens, what they copy into another system, and where judgment interrupts the routine path. The session can end without importing the documents.

This stage tests the workflow thesis. Does the proposed tool address a task that happens in the observed sequence? Does it fit the person's existing tools? Which output would remove preparation work, and which step still needs insurance judgment?

Observation cannot test extraction accuracy or repeated use. It can prevent the product team from building a polished workflow around synthetic assumptions that do not survive contact with the real process.

## One approved case is enough for the next test

The next access level can use one bounded case that the company has approved for evaluation. The team may redact personal or commercially sensitive fields, reconstruct a past case with equivalent documents, or select material that its policy permits for a controlled test.

The product should make a specific claim at this stage. It might prepare a submission summary with source links, identify missing information, or compare a small set of documents. The expected output should be defined before the system sees the case. A reviewer who understands the original work then checks omissions, unsupported conclusions, and time spent correcting the result.

This gives the access request a purpose: the minimum evidence needed to test one workflow output. It avoids an open-ended request to explore a mailbox in search of value.

The test should also define what happens to the material afterward. The company needs a clear answer about where the case was processed, who could reach it, when it will be deleted, and what record of the evaluation will remain. These questions belong in the pilot design even when the product team uses a manual setup.

## Shadow mode should come before operational actions

A useful result on one case can justify a broader shadow test. The system reads an approved source and prepares an output while the team continues its existing process. It does not send a client message, change an internal record, or make an insurance decision.

Shadow mode reveals whether the product works repeatedly. The team can compare its output with the work operators actually completed. It can see where the system matches the wrong thread, misses a later attachment, carries forward stale information, or creates extra review work.

The source boundary should remain visible during this stage. The [browser copilot read boundary](/blog/insurance-browser-copilot-needs-a-visible-read-boundary) explains which messages and files became context for an answer. A pilot needs that record so an error can be traced to the selected source, the model's interpretation, or a missing part of the workflow.

Operational actions should wait until the shadow test shows a stable pattern. If the product later proposes an update to another system, the [write back boundary](/blog/insurance-email-agent-needs-a-write-back-boundary) should keep that proposal separate from the official record until an approved person or rule accepts it.

## Data handling belongs in the success criteria

Accuracy alone does not decide whether a pilot can expand. The team also has to judge whether the access model is understandable and manageable.

A pilot review should ask whether users knew what material the system could read, whether access stayed within the agreed scope, and whether deletion occurred as promised. It should record how often reviewers reopened the original source, how often they corrected the output, and whether those corrections improved the next case. An integration that produces good answers while creating unclear access or manual cleanup has not yet proved operational fit.

The review should also separate product failure from access failure. A missing answer may mean the model overlooked available evidence. It may mean the relevant attachment was outside the approved source. Those problems require different fixes. Expanding access will not repair weak interpretation, while improving the model will not supply evidence it was never allowed to read.

## Broader access should follow repeatable value

The final level is a scoped production connection with defined users, sources, actions, and review responsibilities. Reaching it should depend on evidence from the earlier levels. The team should know which workflow the product supports, which errors remain common, and where a person must take over.

This sequence does not remove the data-access problem. It turns a broad trust request into smaller decisions. The company can evaluate each increase in access against a result it has already seen.

For Insuveo, the immediate test is therefore smaller than a full mailbox integration. We need to show that one approved case produces a useful, inspectable output and that another person can review it without losing the source. Repeated success would give the company evidence for deciding whether broader access is justified.
