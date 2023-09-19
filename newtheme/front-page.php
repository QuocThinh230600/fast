<?php 
    get_header();
?>


    <div class="container">
        <div class="page">
            <section>
                <?php 
                    if(have_posts(  ) ){
                        while( have_posts() ){
                            the_title();
                            the_post();
                            the_content();
                        }
                    }
                ?>
            </section>
        </div>
    </div>

<?php 
    get_footer();
?>

