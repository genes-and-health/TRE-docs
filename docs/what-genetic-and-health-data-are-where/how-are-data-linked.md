# How are data linked?

When volunteers take part in stage 1 of Genes & Health, their questionnaire and consent form are labelled with the ID number on the Oragene saliva tube (style: **15001502031604**). These **Oragene IDs** are then used to label genetic samples (e.g. GSA chip or exome seq). They also label the Questionnaire. Some people have taken part twice (or more than twice) over the years in Genes & Health, and will have a different OrageneID each time.

Genes & Health uses the Questionnaire data to look up a volunteer’s `5236_cram_IDlinkage.xlsx` (if not already provided). The NHS number is one-way pseudonymised (always in the same way using the same encryption key) and the **pseudoNHS number** (style: `0EDFCE604D373660DDF34CA5CBDB754E3BAA17835530591C0161E459A82C7821`) is the identified for all types of health record data. A volunteer should only have one single NHS number in NHS systems (we have found a few exceptions to this rule that we have reported to NHS Digital for consideration of merging).

A file is provided linking OrageneID to pseudoNHSnumber (see [What genetic and health data is where?](what-genetic-and-health-data-is-where.md)). Note that this linkage sometimes changes slightly, e.g. if we find a missing NHS number, for new samples, or if we identify an error in previous NHS number lookup.

Recall studies (stage 2) get their own stage 2 ID. We will provide files linking these to **pseudoNHS numbers**. The primary identifier used for volunteer recall is the NHS number.

Wellcome Sanger Institute has used several other ID types e.g. sanger sample ID, cram file ID, EBI-EGA submission ID. The Broad Institute uses the Oragene ID with a prefix (style: GNH-15001502031604).
