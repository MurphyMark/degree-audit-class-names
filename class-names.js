
$('[href*="wasapp/DARSAdvisor/BannerCourseRedirectServlet"]').each(function(){
    var link = this
    var url = $(this).attr('href')
    // We don't want to change courses of the form '0000 TO 7999'
    // This is pretty dangerous, because it just assumes that the word "TO" 2 parents above means it's of that form...
    // But like, worst case, one class name doesn't get changed.
    if($(this).parent().parent().text().toString().indexOf('TO') !== -1) {
        return;
    }

    $.ajax({
        url:url,
        type:'GET',
        success: [
            function(data) {
                var courseName = $('.nttitle', data).text()

                var newLink = '<p style="margin: 0">' +
                    '<a class="auditText" style="text-decoration: none" href="' + url + '">' + "       " + courseName + '</a>' +
                    '</p>'

                if(courseName){
                    $(link).parent().after(newLink)
                    $(link).parent().hide()
                }
            }
        ]
    })
})
