# High-depth exome sequencing

## High-depth exome sequencing specifications and data  

Samples were run on Twist (Clinical Research Alliance) exomes and 150bp PE Novaseq 6000 sequencing (at Broad Clinical Labs). Full technical details are provided in the readme files with the datasets.  

Data are available in vcf format, and in regenie ready-formats alongside PC and covariate files. A variety of other files are also provided.  

## Access for academic-only approved projects  

!!! warning
    The following data are only available within TRE.
    
### 44k data
```
gs://qmul-production-library-exomes-library-red/callsets/2023_02_44kCallset/
```

This dataset is now deprecated, but is provided as it was used in the Hye In Kim, _et al._ Nature Genetics 2026 paper

### 55k data

#### crams
```
gs://qmul-production-library-exomes-library-red/crams/
```

#### callset:
```
gs://qmul-production-library-exomes-library-red/callsets/2024_05_55kCallset/
```

(regenie results for 55k exomes are not yet released)

See also the [Public data](./public-data.md) section.

**For regenie step 1 use:**

(for use with --bfile ; reminder to copy files to your `/home/ivm` first, too slow to run from standard storage)  
```
gs://qmul-production-library-exomes-library-red/callsets/2024_05_55kCallset/release_2024-OCT-08/all_transcripts/chr1..22X_hard_filters.tidy.55273individuals.finalConsortium1_55k.alltranscriptsvep_indep-pairwise_1000_100_0.9.prune.in_extracted*  
```

**For regenie step 2 use:**

(for use with --pfile ; reminder to copy files to your `/home/ivm` first, too slow to run from standard storage)  
```
gs://qmul-production-library-exomes-library-red/callsets/2024_05_55kCallset/release_2024-OCT-08/all_transcripts/chr1..22X_hard_filters.tidy.55273individuals.finalConsortium1_55k.alltranscriptsvep*
```


## Access for Consortium1 partners  

!!! warning
    The following data are only available within TRE.

### 55k

#### crams
```
gs://qmul-production-library-consortiumpriorityperiod-red/crams/  
```

#### Callset:
```
gs://qmul-production-library-consortiumpriorityperiod-red/Callsets/2024_05_55kCallset/  
```

### Manual annotations of LoF variants (**including individual level data**):  
```
gs://qmul-production-library-consortiumpriorityperiod-red/LOF_curation_GarvanInstitute/  
```

!!! info
    The following data are available within TRE _or_ downloadable.

### 55k sites only vcf:  
```
gs://qmul-production-library-consortiumpriorityperiod-green/Callsets/2024_05_55kCallset/release_2024-OCT-08/all_transcripts/  
```

### 55k ExWAS Results & remeta files:
```
gs://qmul-production-library-consortiumpriorityperiod-green/Callsets/2024_05_55kCallset/release_2025-JUN-16_ExWAS/  
gs://qmul-production-library-consortiumpriorityperiod-green/Callsets/2024_05_55kCallset/  
```

### Manual annotations of LoF variants:
```
gs://qmul-production-library-consortiumpriorityperiod-green/LOF_curation_GarvanInstitute/  
```

## Public available datasets

sites only vcfs and ExWAS results: see page [Public data](./public-data.md)




