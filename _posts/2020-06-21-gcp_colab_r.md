---
layout: single
author_profile: true
share: true
comments: true
read_time: true
title: Accessing Google Cloud Platform Buckets From a Co-Lab Notebook Running R
---

Last week, I set up a Google Co-lab notebook running on R (my preferred language for data exploration and early stages EDA). I wanted to access some buckets from a Google Cloud Platform(GCP) project that was being hosted on my company’s GCP platform. I used the `googleCloudStorageR` library written by [Mark Edmondson](https://code.markedmondson.me/).

In the documentation for the package, they specified downloading a service account JSON file from a GCP project, which would then be referenced by the library for connecting to the GCP project and accessing the buckets. However, since I wanted this notebook to be easily shared by other people across my organization, I did not want to access a JSON file that had the access keys for the API and which would need to be saved along with the Co-lab notebook. Instead, I wanted to connect and authenticate with the GCP project interactively and in real-time from the Co-lab notebook, which would allow anyone with the correct credentials for my organization’s GCP project to run the notebook on their own.

This seemingly simple workaround took longer than I had thought it would. With ample help from Marc, I was able to solve this issue using the code snippet below:

```
install.packages("httr")
install.packages("R.utils")
install.packages("googleCloudStorageR")
if (file.exists("/usr/local/lib/python3.6/dist-packages/google/colab/_ipython.py")) {
  library(R.utils)
  library(httr)
  reassignInPackage("is_interactive", pkgName = "httr", function() return(TRUE))
}
options(
  rlang_interactive = TRUE,
  gargle_oauth_email = "email_address",
  gargle_oauth_cache = TRUE
)
tt <- gargle::token_fetch(scopes = "https://www.googleapis.com/auth/cloud-platform")
googleAuthR::gar_auth(token = tt)
```
