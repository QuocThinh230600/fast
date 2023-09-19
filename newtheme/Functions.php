<?php 

function theme_support(){
    add_theme_support('title_tag');
}
add_action( 'after_setup_theme', 'theme_support');

function menus(){
    $locations = array(
        'primary' => "Main Menu",
        'footer'  => "Footer"
    );

    register_nav_menus($locations);
}
add_action('init', 'menus');

function register_style(){
    $version = wp_get_theme()->get('Version');
    wp_enqueue_style('style', get_template_directory_uri() . "/asset/css/style.css", array(), $version, 'all');
}
add_action( 'wp_enqueue_scripts', 'register_style' );


function register_scripts(){
    $version = wp_get_theme()->get('Version');
    wp_enqueue_script('main', get_template_directory_uri() . "/asset/js/main.js", array(), $version, 'all');
}
add_action( 'wp_enqueue_scripts', 'register_scripts' );
?>