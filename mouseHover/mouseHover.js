$("#image_list a").hover(
    evt => $(evt.currentTarget).stop(true).animate(
        { top: 15 }, "fast"),
    evt => $(evt.currentTarget).stop(true).animate(
        { top: 0 }, "fast")
);
