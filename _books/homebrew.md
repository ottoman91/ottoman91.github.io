---
layout: single
share: true 
author_profile: true 
comments: true 
read_time: true
title: Removing a Homebrew package and all of its dependencies on macOS
 
--- 

Homebrew is an excellent command line package management tool for Mac OSx, and it is rightly proclaimed as “The missing package manager for macOS”, as stated on its official website. However, a few days ago, I came across an urgent task which I had not addressed before, namely, how to cleanly and completely remove a package installed from Homebrew, along with all of its dependencies.
A quick online search rendered the following approach on Stackoverflow, which included using an external command called brew rmtree, which was to be executed as follows:

$ brew tap beeftornado/rmtree
$ brew rmtree <package>

However, for some reason, when I ran this command, brew took an insanely long time to update. I am not quite sure what the error was, but it was most probably due to my crappy internet connection.
Nevertheless, I came across another method for achieving this task on the same Stackoverflow answer thread. I found this method to be easier and way quicker, although it did take me a while to figure out how to run external brew scripts and the configurations that need to be made to run them. To save others the hassle and time of understanding how the configuration would need to be set up, I am highlighting the steps followed below:
1. Download the brew_clean script from this Github repo
2. Once you have unzipped the downloaded file, copy the brew_clean script to /usr/local/bin. This would ensure that the script is global.
3. Make the script executable by running the following command in the /usr/local/bin directory:
sudo chmod+x brew_clean
4. Run the following command in your directory of choice to generate a file that contains the list of all brew packages installed on your machine:
brew leaves > brew_packages
5. Open the brew_packages file using your favourite text editor ( which is nano in my case for such small tasks). In the file, delete the name of the package you want to remove. Save and close the file.
6. Run the following command to allow brew_clean to remove the package you deleted from the brew_packages file:

$ brew_clean brew_packages

And there you have it. You can verify that the package has indeed been deleted by moving to the /usr/local/Cellar directory. The package that you just deleted would no longer be listed in the directory.
Hope this helped. Happy coding and creating awesome software solutions for the world!