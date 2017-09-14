# popuper-components
浮出层组件——提供自定义浮出层头部、内容、底部和拖拽等功能
# 使用方法
## 引入样式
    <link rel="stylesheet" href="style/popuper.css"/>
## 引入js
    <script src="js/popuper.js"></script>
    <script src="js/EventUtil.js"></script>
## 编写html
    <button class="btn" id="show_popuper">click</button>
    <div class="popuper">
        <div class="popuper_wrap">
            <header class="popuper_eader">
                <h2>这是弹出层的头部</h2>
            </header>
            <section class="popuper_content">
                <h2>这是弹出层的内容</h2>
            </section>
            <section class="popuper_footer">
                <input type="button" class="confirm" value="确认">
                <input type="button" class="cancel" value="取消">
            </section>
        </div>
    </div>
