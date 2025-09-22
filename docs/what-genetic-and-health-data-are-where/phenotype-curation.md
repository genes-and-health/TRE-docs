# Phenotype Curation

The philosophy of the Genes & Health project is to provide researchers with the tools to generate their own phenotypes as well as providing a curated set of phenotypes.  However, the Genes & Health Data Team provides two "pre-computed" phenotypic datasets identified by the name of the python-scripted pipeline used to generate them: `BI_PY` (binary traits) and `QUANT_PY` (quantitative traits).

!!! tip "Learning more about `BI_PY` and `QUANT_PY`"
    Although `BI_PY` and `QUANT_PY` are briefly described below, users wanting further details on these are encouraged to visit the public GitHub pages for each pipeline:
    
    * [BI_PY — a python pipeline for binary trait attribution in Genes & Health](https://github.com/genes-and-health/BI_PY/)
    * [QUANT_PY — a python pipeline for quantitative data extraction in Genes & Health](https://github.com/genes-and-health/QUANT_PY/)

!!! info "A note regarding the use of `tre-tools`"
    The [`tre-tools`](https://github.com/genes-and-health/tre-tools) were used until the creation of version 10 of the Genes & Health curated phenotype resources.  Although v10 does use some [`tre-tools`](https://github.com/genes-and-health/tre-tools), changes in the structure and impementation of the phenotype pipielines mean that [`tre-tools`](https://github.com/genes-and-health/tre-tools) usage is now limited.  The [`tre-tools`](https://github.com/genes-and-health/tre-tools) package is no longer being maintained or updated and is likely to be deprecated in subsequent curated phenotype releases.
    <p>
    We are very grateful to [Caroline Morton](https://www.carolinemorton.co.uk/about/), [Saeed Bidi](https://uk.linkedin.com/in/saeed-bidi) and current and former members of the G&H Data Team for their help in developing the TRE pipeline infrastructure. 

## BI_PY: Binary traits

Binary traits are those that have two possible outcomes, such as disease status (e.g. diabetes, hypertension). A person either has the disease or they do not.

The Genes & Health (G&H) `BI_PY` pipeline extracts and processes binary trait data from G&H phenotype data.  Relevant codes may be SNOMED-CT, ICD-10 or OPCS codes.  `BI_PY` "runs" a list of such per-binary-phenotype codes against any code associated with a G&H volunteer.  If the volunteer has one or more such codes, they are associated with the relevant binary phenotype --allowing case-control type analyses against volunteers not associated with the binary phenotype.

The pipeline creates files and covariate files suitable for `regenie` \[G/Ex\]WAS analysis, as well as generic files for each binary trait at a _per individual_ level (one row per individual summarising the individual’s earliest applicable code and age at first diagnosis).

The pipeline is constituted of 8 sequential python notebooks:

* **1-create-clean-demographics-notebook**
* **2-process-datasets-discovery-primary-care**
* **3-process-datasets-barts-health**
* **4-process-datasets-bradford**
* **5-process-datasets-nhs-digital**
* **6-merge-datasets-notebook**
* **7-three-and-four-digit-ICD**
* **8-custom-phenotypes**
  
### Phenotype data
The pipeline imports G&H phenotype data in `.../library-red/phenotypes_rawdata/`.  These data are from the following sources:

1. **DSA__BartHealth_NHS_Trust**: Secondary care data from the Barts Health NHS Trust \[North East London: ~40,000 individuals with data\]
2. **DSA__BradfordTeachingHospitals_NHSFoundation_Trust**: Secondary care data from the Bradford Teaching Hospitals NHS Trust \[Bradford and environs: ~1,700 individuals with data\]
3. **DSA__Discovery_7CCGs**: Primary care data from the North East London ICS \[North East London: ~45,000 individuals with data\]
4. **DSA_NHSDigital**: Data from NHS Digital (NHSD) \[England-wide: ~TBC individuals with data].  Data files vary with each cut of NHSD but include one or more of: i) **civil registration data**, ii) **HES APC data**, iii) **HES OP data**, iv) **cancer registry data**, v) **ECDS data**

### Input files

The pipeline requires a single input file.  This file is a `.csv` file which gives a set of SNOMED +/- ICD-10 +/- OPCS codes each of which constitute a phenotype.  The current version of this input file is `GenesAndHealth_custombinary_codelist_v010_2025_05v4.csv`.  This file can be found in the `/library-red/genesandhealth/phenotypes_curated/version010_2025_04/BI_PY/inputs/` directory.

The custom codelist .csv file has 4 columns: `phenotype`, `code`, `name`, `comment`.

```
phenotype, code, name, comment
GNH0002_CoronaryArteryDisease_narrow,I200,ICD10,Unstable angina,
GNH0002_CoronaryArteryDisease_narrow,I201,ICD10,Angina pectoris with documented spasm,
GNH0002_CoronaryArteryDisease_narrow,I208,ICD10,Other forms of angina pectoris,
[...]
GNH0002_CoronaryArteryDisease_narrow,K401,OPCS4,Saphenous vein graft replacement of one coronary artery,
GNH0002_CoronaryArteryDisease_narrow,K402,OPCS4,Saphenous vein graft replacement of two coronary arteries,
GNH0002_CoronaryArteryDisease_narrow,K403,OPCS4,Saphenous vein graft replacement of three coronary arteries,
[...]
GNH0002_CoronaryArteryDisease_narrow,I753000,SNOMED ConceptID,Old myocardial infarction,
GNH0002_CoronaryArteryDisease_narrow,22298000,SNOMED ConceptID,Heart attack,
GNH0002_CoronaryArteryDisease_narrow,22298000,SNOMED ConceptID,Myocardial infarction,
```

In `GenesAndHealth_custombinary_codelist_v010_2025_05v4.csv` there are **285 binary trait codelists** from various users:

* **MULTIPLY-initiative**: 202 traits; e.g. Ankylosing_spondylitis \[ICD-10, SNOMED-CT, OPCS\]
* **GenomicsPLC/Consortium**: 16 traits; e.g. GNH0005_MyocardialInfarction_extended \[ICD-10, SNOMED-CT, OPCS\]
* **Bespoke researcher/research group**: 42 traits; e.g. MGH_MitralValveProlapse \[ICD-10 and/or SNOMED-CT and/or OPCS\]
* **NEW! NHS Primary Care Domain refsets**: 25 traits; e.g. QOF_CKD_COD \[SNOMED-CT only\]

The [`GenesAndHealth_custombinary_codelist_v010_2025_05v4.csv`](https://docs.google.com/spreadsheets/d/1ipwdF2j_owfr_QbkDYk1rk0TW3KtdfQYVQn-Vf-o38s/edit?usp=sharing) Google document details the binary trait codelists (tab `v010_2025_05_BinaryTraits_Custom_Codelists`) and give an count of individuals associated with a specific custom or ICD-10 derived codelist. 

### Output files

The `outputs` directory hierarchy is as follows:

```
outputs  
├── custom_phenotypes  
│   ├── individual_trait_files  
│   └── regenie  
└── icd10  
    ├── individual_trait_files  
    │   ├── 3_digit_icd  
    │   └── 4_digit_icd  
    └── regenie
```

## QUANT_PY: Quantitative traits

The Genes & Health (G&H) `QUANT_PY` pipeline extracts and processes quantitative data from G&H phenotype data.  

The pipeline identifies all primary and secondary care quantitative trait readings; harmonises units; removes duplicates (including serial readings within narrow windows); excludes outlier values above clinically curated reasonable upper and lower bounds; and presents individual and study-level mean, median, min and max values.

It creates files and covariate files suitable for `regenie` \[G/Ex\]WAS analysis as well as generic files for each quantitative trait at a _per individual_ level (one row per individual summarising the individual's values for the trait) and a _per result_ level (one line per individual-result).  The pipeline processes HES data to identify admitted patient care (APC) episodes.  From this, three versions of the created files are generated: 1) All data, 2) Out of hospital data (without APC + a buffer), 3) In hospital data (within APC + a  buffer).

### Phenotype data
The pipeline imports G&H phenotype data in `/library-red/phenotypes_rawdata/`.  These data are from the following sources:

1. **DSA__BartHealth_NHS_Trust**: Secondary care data from the Barts Health NHS Trust \[North East London: ~40,000 individuals with data\]
2. **DSA__BradfordTeachingHospitals_NHSFoundation_Trust**: Secondary care data from the Bradford Teaching Hospitals NHS Trust \[Bradford and environs: ~1,700 individuals with data\]
3. **DSA__Discovery_7CCGs**: Primary care data from the North East London ICS \[North East London: ~45,000 individuals with data\]
4. **DSA_NHSDigital**: Data from the National Diabetes Audit (NDA) \[England-wide: ~13,000 individuals with data]

### Input files

The pipeline requires 3 **trait input** files: 1. `trait_features.csv`, 2. `trait_aliases_long.csv`, 3. `unit_conversions.csv`.

#### _`trait_features.csv`_
This file lists all the quantitative traits currently extracted from the phenotype data.  The .csv file has 4 columns: trait,target_units,min,max.
  
```
trait,target_units,min,max
2h postprandial glucose,millimol/L,0.6,45.0
AFP,kU/L,1e-100,10000.0
ALP,units/L,8.0,1500.0
ALT,units/L,5.0,1500.0
APTT,seconds,1e-100,100.0
AST,units/L,3.0,1000.0
Albumin,g/L,10.0,80.0
Alcohol units per week,units/week,0.0,350.0
```

So, for example, there is a "2h postprandial glucose" trait which is reported in "millimol/L", excluding any value less than 0.6 millimol/L or over 45.0 millimol/L.

#### _`trait_aliases_long.csv`_
SNOMED codes are missing for some of the G&H data pulls, this means that quantitative trait extraction is based on free-text trait descriptions (aka `original_term` within the script).  This file assigns all valid trait descriptions (aliases) to a trait.

```
trait,alias
2h_postprandial_glucose,2h postprandial glucose
2h_postprandial_glucose,"Glucose tolerance test, 2 hour post prandial (procedure)"
...
Alcohol_units_per_week,Alcohol units per week
Alcohol_units_per_week,Alcohol units/week (qualifier value)
...
Blood_ketones,Blood ketone level (observable entity)
Blood_ketones,POCT Blood Ketones
...
creatinine,Creatinine Serum
creatinine,Creatinine level (observable entity)
```
#### _`unit_conversions.csv`_
The same trait may be measured in different units depending of the setting (e.g. primary vs secondary care) or the data source (trust 1 vs trust 2).  This file allows unit conversions if a trait is in a valid but undesired unit which can be converted to a target_unit (as defined in `trait_features.csv`).  It also acts as a synonym dictionary to standardise unit terminology, for example, `nmol/L` is converted into the preferred term `nanomol/L`. Such conversions can be identified by a `multiplication_factor` of 1.0. 

```
result_value_units,target,multiplication_factor
%,%,1.0
*10^9/l,10^9/L,1.0
g/L,mg/L,1000.0
IU/L,units/L,1.0
Kg,grams,1000.0
mg/L,g/L,0.001
miu/L,milliunits/L,1.0
nmol/L,nanomol/L,1.0
Units/Day,units/week,7.0
```

#### Hospital admission data

`QUANT_PY` uses NHS England Digital Hospital Episode Statistics (HES) Admitted Patient Care (APC) data to identify periods of hospitalisation.  As certain hospitals log day treatments as APC events (e.g. immunotherapy infusions), **only APC episodes >2 calendar days are considered as hospitalisation**.  At present, `QUANT_PY` does not exclude data obtained during a A&E episode (HES AE + ECDS) unless this leads to a hospital admission (in which case it is "subsumed" by an APC episode).  However, the script is written such that it could accommodate these if needed/desired.

`QUANT_PY` **extends the hospitalisation episode by a 2-week buffer on either side of the APC event** on the basis that individuals admitted to hospital are typically unwell in the days leading to hospitalisation and may be discharged recovering, but prior to a return to their baseline status.

### Output files

The following files are generated by `QUANT_PY` to the  `/library-red/genesandhealth/phenotypes_curated/version010_2025_04/QUANT_PY/outputs/` directory:

1. **per trait files** \[`../outputs/individual_trait_files/`; subdirectories: `in_hospital`, `out_hospital`, `all`\]:
     - **`_{trait}_readings_at_unique_timepoints.csv`**: one validated result per row (columns: `pseudo_nhs_number, trait, unit, value, date, gender, age_at_test, minmax_outlier`) 
     - **`_{trait}_per_individual_stats.csv`**: one row per volunteer (`pseudo_nhs_number, trait, median, mean, max, min, earliest, latest, number_observations`)
2. **per trait plots** \[`../outputs/individual_trait_plots/`; subdirectories: `in_hospital`, `out_hospital`, `all`\]:
      - **`_{trait}_{setting}.svg`**: Histograms of trait log10(values) for trait separated M and F listing median, mean, min, max, number individuals, number observations
3. **regenie files** \[`../outputs/regenie/`; subdirectories: `in_hospital`, `out_hospital`, `all` and `covariate_files`\]:
      - **`_{trait}_{setting}_[regenie_51|regenie_55].tsv`**: regenie files for 51kGWAS and 55kExome analyses
      - **`./covariate_files/_{setting}_[regenie_51|regenie_55]_megawide.tsv`**: regenie covariate files allowing age at test analyses (cf. age on joining Genes and Health)

