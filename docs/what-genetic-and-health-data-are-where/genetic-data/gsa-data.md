# Illumina Global Screening Array (GSA) data

## GSA specifications

Samples were run on the Illumina GSAv3EAMD chip, and imputed to TOPMed-r3. Full technical details are provided in the readme files with the datasets.

Data is available in vcf format, and in regenie ready formats alongside PC and covariate files. A variety of other files e.g. ROH, IBIS, HLA imputation are also provided.

The latest release is **51k unique individuals, January 2024**.  
gs://qmul-production-library-red/genesandhealth/GSAv3EAMD/Jan2024_51k_TOPMED-r3_Imputation_b38/

Hard call genotypes (filtered) for regenie step1 are found here:  
regenie --step 1 --bfile gs://qmul-production-library-red/genesandhealth/GSAv3EAMD/Jan2024_51k_TOPMED-r3_Imputation_b38/GenesAndHealth_GSAv3EAMD_SubProj1to17merge_ClusterFile4.step07finalsampleQC_51176samples_LDpruned_maf0.05_noXY_snpsonly

Files with HDS dosage are provided (not recommended for general use, too large and slow):  
regenie --step 2 --pgen gs://qmul-production-library-red/genesandhealth/GSAv3EAMD/Jan2024_51k_TOPMED-r3_Imputation_b38/chrALL.dose.merged_INFO0.7_MAF0.00001_F_MISSING0.1_mac20_autosomal_snps_withHDSdosage_51176samples_topmedr3

For general regenie use, these files are recommended:  
regenie --step 2 --pgen 
gs://qmul-production-library-red/genesandhealth/GSAv3EAMD/Jan2024_51k_TOPMED-r3_Imputation_b38/chrALLincX.dose.merged_INFO0.3_MAF0.00001_F_MISSING0.2_mac10_51176samples_topmedr3


A release of ~70k individuals is expected summer 2026.


## Data location

gs://qmul-production-library-red/genesandhealth/GSAv3EAMD/

