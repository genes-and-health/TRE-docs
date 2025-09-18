# TRE identifiers

There are two identifiers in the G&H TRE which allow data linkage (e.g. genomic data to binary traits):

1. **PseudoNHS number:** these 64-character alpha-numeric strings serves as a unique identifier for individuals and are used for health data and phenotype identification.
2. **OrageneID**: these 14-digit strings serves as an identifier for saliva tube DNA IDs.

!!! warning
    Multiple samples may be collected from the same individual, resulting in a many-to-one relationship between Oragene ID and PseudoNHS number.

## GSA and Exome data identifiers (assay IDs)

Genetic assays, such as exome sequencing or GSA chip analysis, are assigned assay IDs. 

For GSA chip analysis, the assay ID consists of the OrageneID concatenated with the Illumina chip ID and row position, e.g. **12345678901234_201234567890_R00C00**.

Exome sequencing assay IDs follow the format **GNH-12345678901234_2**, with the suffix accommodating multiple assays of a single Oragene ID. Multiple or repeated assays may be conducted on the same Oragene ID.

## Linking genetic assays and health data

There is a file linking OrageneIDs/assay IDs (for genetics & questionnaire data) with PseudoNHS numbers (for NHS e-health record data and stage-1 questionnaire data). This file may get updated and re-dated:

```
/library-red
└── genesandhealth
    └── 2025_02_10__MegaLinkage_forTRE.csv
```

!!! info
    Within the TRE community, this file is simply referred to as the MegaLinkage file or even sometime Megalinkage™ 
