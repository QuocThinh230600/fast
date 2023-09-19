<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php 
    wp_head();
    ?>
</head>
<body>
    <header class="header">
        <div class="main_header">
            <div class="left_header">
                <a href="/">
                    <img src="./asset/image/1.jpg" alt="">
                </a>
            </div>

            <div class="right_header">
                <?php
                    wp_nav_menu(
                        array(
                            'menu' => 'primary',
                            'container' => 'div',
                            'container_class' => 'righit_item',
                            'theme_location' => 'primary',
                            'items_wrap' => '<ul class="main_menu">%3$s</ul>',
                        )
                    );
                ?>
            </div>
        </div>
    </header>