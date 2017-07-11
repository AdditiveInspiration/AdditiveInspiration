#SETUP ------------------------------------------------
import sys, time, os

from os import listdir
from os.path import isfile, join
#------------------------------------------------------
global n_blog_post_collection
global title, date, text, text_flag, full_text, split_text
n_blog_post_collection = ''
full_text = ''
split_text = ''
#------------------------------------------------------
# Gather User Input
#------------------------------------------------------
 
index_no = int(input("\nIndex Number: "))
post_range_low = int(input("\nFirst blog post to include: "))
post_range_high = int(input("\nLast blog post to include: "))
#------------------------------------------------------
template_index = "template_index.html"

index_file = open( template_index,'r')
if(index_no == 0):
    index_file_tmp = open('./index' + '.html','w')
else:
    index_file_tmp = open('./index-' + str(index_no) + '.html','w')


#-------- Generate Index --------------------------

for line in index_file:
    i = post_range_low
    #Start Entering Blog posts!!!
    if '<!BLOG_POST!>' in line:
        n_blog_post_collection = line.replace('<!BLOG_POST!>','')
        
        while(i <= post_range_high):
            
            n_blog_post_collection = n_blog_post_collection + '\n <script src="./blog_posts/blog_post-' + str(i) + '.js"></script>'      
            i = i+1
            
            
        index_file_tmp.write(n_blog_post_collection)        
            
            
            
            
    elif '<N-1>' in line:
                
            n_old_line = line.replace('<N-1>','-'+str(index_no-1)+'.html')
            if(index_no <= 1):
                n_old_line = line.replace('<N-1>','.html')
                
            index_file_tmp.write(n_old_line)
    elif '<N+1>' in line:
             
            n_old_line = line.replace('<N+1>','-'+str(index_no+1)+'.html')
            
            index_file_tmp.write(n_old_line)
    else:
             
            index_file_tmp.write(line)
index_file_tmp.close()
            
#-------- GENERATE POSTS AND ENSURE THEY LINK BACK TO THE INDEX THEY COM FROM -------------------
#First Generate POST TO BE PLACE ON INDEX PAGE --------------------------------------------------


i = post_range_low

while i <= post_range_high:
    template_indexed_blog_file = open( "./blog_posts/blog_post.js",'r')
    template_post_full = open("./posts/template_post.html",'r')
    full_post_full = open("./posts/post-"+str(i) +".html",'w')
    complete_blog_post = open("./blog_posts/full_blog_post.js",'r')
    complete_blog_post_tmp = open("./posts/full_blog_post-" + str(i) + '.js','w')
    
    template_indexed_blog_file_tmp = open( "./blog_posts/blog_post-" + str(i) +".js",'w')
    blog_text_information = open("./blog_posts_text/post-"+str(i) +".txt",'r')
    title = ''
    date = ''
    text = ''
    text_flag = 0
    i = i+1
    
    for line in blog_text_information:
        if '<!TITLE!>' in line:
            title = line.replace('<!TITLE!>','')  
            print('\n'+ title)
        elif '<!DATE!>' in line:
            date = line.replace('<!DATE!>','')  
            print('\n'+date)
        elif '<!TEXT!>' in line or text_flag == 1:
            if text_flag == 0:
                text = text + line.replace('<!TITLE!>','')
                text_flag = 1
            else:
                text = text + line
                 
                if '<!TEXT_END!>' in text:
                    text = text.replace('<!TEXT_END!>','')
                    split_text, full_text = text.split('<!R!>')
                    full_text = split_text + full_text
                    text_flag = 0
                    print('\n'+text)
                    
    print('\nWriting the post')          
    for line in template_indexed_blog_file:
        if '<!TITLE!>' in line:
            new_line = line.replace('<!TITLE!>',title)
            template_indexed_blog_file_tmp.write(new_line )
            
        elif '<!DATE!>' in line:
            new_line = line.replace('<!DATE!>',date)
            template_indexed_blog_file_tmp.write(new_line )

        elif '<!TEXT!>' in line:
            new_line = line.replace('<!TEXT!>',split_text)
            template_indexed_blog_file_tmp.write(new_line )
        elif '<!POST_NO!>' in line:
            new_line = line.replace('<!POST_NO!>','./posts/post-'+str(i-1) + '.html\\')
            template_indexed_blog_file_tmp.write(new_line )
        else:
            template_indexed_blog_file_tmp.write(line)
        
        n_blog_post_collection = ''
    for line in template_post_full:
        

        if '<!BLOG_POST!>' in line:
            n_blog_post_collection = line.replace('<!BLOG_POST!>','')
            n_blog_post_collection = n_blog_post_collection + '\n <script src="../posts/full_blog_post-' + str(i-1) + '.js"></script>'      
            full_post_full.write(n_blog_post_collection)        
        
        elif '<N-1>' in line:
            n_old_line = line.replace('<N-1>','-'+str(i-2)+'.html')
                 
            full_post_full.write(n_old_line)
        elif '<N+1>' in line:
             
            n_old_line = line.replace('<N+1>','-'+str(i)+'.html')
            full_post_full.write(n_old_line)
        else:
             
            full_post_full.write(line)
    
    for line in complete_blog_post:
        if '<!TITLE!>' in line:
            new_line = line.replace('<!TITLE!>',title)
            complete_blog_post_tmp.write(new_line )
            
        elif '<!DATE!>' in line:
            new_line = line.replace('<!DATE!>',date)
            complete_blog_post_tmp.write(new_line )

        elif '<!TEXT!>' in line:
            new_line = line.replace('<!TEXT!>',full_text)
            complete_blog_post_tmp.write(new_line )
        elif '<!INDEX_NO!>' in line:
            if index_no == 0:
                new_line = line.replace('<!INDEX_NO!>','../index' + '.html\\')
                complete_blog_post_tmp.write(new_line )
            else:
                new_line = line.replace('<!INDEX_NO!>','../index-' + str(index_no) + '.html\\')
                complete_blog_post_tmp.write(new_line )
        else:
            complete_blog_post_tmp.write(line)
# --- FULL BLOG POST --------------------------------------------------

 

